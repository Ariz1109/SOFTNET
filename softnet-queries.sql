CREATE DATABASE SOFTNET;
GO

USE SOFTNET;
GO

-- tabla MaeUsuario
CREATE TABLE MaeUsuario (
    CodUsuario INT PRIMARY KEY IDENTITY(1,1),
    TipDocumento VARCHAR(50) NULL,
    VarDocIdentidad VARCHAR(50) NULL,
    VarApellidos VARCHAR(100) NULL,
    VarNombres VARCHAR(100) NULL,
    VarPassword VARCHAR(100) NULL,
    VarNumTelefono VARCHAR(50) NULL,
    IntFlgEliminado BIT NOT NULL,
    FecRegistro DATETIME NOT NULL DEFAULT GETDATE(),
    FecModificacion DATETIME NULL
);
GO

-- tabla DetUsuarioEmpresa
CREATE TABLE DetUsuarioEmpresa (
    CodEmpresa INT NOT NULL,
    CodUsuario INT NOT NULL,
    VarCargo VARCHAR(100) NULL,
    VarCorreo VARCHAR(100) NULL,
    IntEstado INT NULL,
    VarNomImagen VARCHAR(100) NULL,
    IntFlgEliminado BIT NOT NULL,
    FecRegistro DATETIME NOT NULL DEFAULT GETDATE(),
    FecModificacion DATETIME NULL,
    PRIMARY KEY (CodEmpresa, CodUsuario),
    FOREIGN KEY (CodUsuario) REFERENCES MaeUsuario(CodUsuario)
);
GO


-- En caso de error de creacion de las tablas ejecutar esto, elimna las tablas con todo su contenido
DROP TABLE IF EXISTS DetUsuarioEmpresa;
GO

DROP TABLE IF EXISTS MaeUsuario;
GO

------------------------------------------------------------------------

CREATE PROCEDURE [dbo].[Usp_Ins_MaeUsuario]
    @TipDocumento VARCHAR(50),
    @VarDocIdentidad VARCHAR(50),
    @VarApellidos VARCHAR(100),
    @VarNombres VARCHAR(100),
    @VarPassword VARCHAR(100),
    @VarNumTelefono VARCHAR(50)
AS
BEGIN
    INSERT INTO MaeUsuario (TipDocumento, VarDocIdentidad, VarApellidos, VarNombres, VarPassword, VarNumTelefono, IntFlgEliminado, FecRegistro)
    VALUES (@TipDocumento, @VarDocIdentidad, @VarApellidos, @VarNombres, @VarPassword, @VarNumTelefono, 0, GETDATE());
END;

CREATE PROCEDURE [dbo].[Usp_Upd_MaeUsuario]
    @CodUsuario INT,
    @TipDocumento VARCHAR(50),
    @VarDocIdentidad VARCHAR(50),
    @VarApellidos VARCHAR(100),
    @VarNombres VARCHAR(100),
    @VarPassword VARCHAR(100),
    @VarNumTelefono VARCHAR(50)
AS
BEGIN
    UPDATE MaeUsuario
    SET TipDocumento = @TipDocumento,
        VarDocIdentidad = @VarDocIdentidad,
        VarApellidos = @VarApellidos,
        VarNombres = @VarNombres,
        VarPassword = @VarPassword,
        VarNumTelefono = @VarNumTelefono,
        FecModificacion = GETDATE()
    WHERE CodUsuario = @CodUsuario;
END;
GO

CREATE PROCEDURE [dbo].[Usp_Del_MaeUsuario]
    @CodUsuario INT
AS
BEGIN
    UPDATE MaeUsuario
    SET IntFlgEliminado = 1,
        FecModificacion = GETDATE()
    WHERE CodUsuario = @CodUsuario;
END;
GO

CREATE PROCEDURE [dbo].[Usp_Sel_MaeUsuario_All]
AS
BEGIN
    SELECT CodUsuario, TipDocumento, VarDocIdentidad, VarApellidos, VarNombres, VarPassword, VarNumTelefono, IntFlgEliminado, FecRegistro, FecModificacion
    FROM MaeUsuario;
END;
GO

CREATE PROCEDURE [dbo].[Usp_Sel_MaeUsuario_ById]
    @CodUsuario INT
AS
BEGIN
    SELECT CodUsuario, TipDocumento, VarDocIdentidad, VarApellidos, VarNombres, VarPassword, VarNumTelefono, IntFlgEliminado, FecRegistro, FecModificacion
    FROM MaeUsuario
    WHERE CodUsuario = @CodUsuario;
END;
GO

---------------------------------------------------------------------------------------------

CREATE PROCEDURE [dbo].[Usp_Ins_DetUsuarioEmpresa]
    @CodEmpresa INT,
    @CodUsuario INT,
    @VarCargo VARCHAR(100),
    @VarCorreo VARCHAR(100),
    @IntEstado INT,
    @VarNomImagen VARCHAR(100)
AS
BEGIN
    INSERT INTO DetUsuarioEmpresa (CodEmpresa, CodUsuario, VarCargo, VarCorreo, IntEstado, VarNomImagen, IntFlgEliminado, FecRegistro)
    VALUES (@CodEmpresa, @CodUsuario, @VarCargo, @VarCorreo, @IntEstado, @VarNomImagen, 0, GETDATE());
END;
GO


CREATE PROCEDURE [dbo].[Usp_Upd_DetUsuarioEmpresa]
    @CodEmpresa INT,
    @CodUsuario INT,
    @VarCargo VARCHAR(100),
    @VarCorreo VARCHAR(100),
    @IntEstado INT,
    @VarNomImagen VARCHAR(100),
    @IntFlgEliminado BIT
AS
BEGIN
    UPDATE DetUsuarioEmpresa
    SET VarCargo = @VarCargo,
        VarCorreo = @VarCorreo,
        IntEstado = @IntEstado,
        VarNomImagen = @VarNomImagen,
        IntFlgEliminado = @IntFlgEliminado,
        FecModificacion = GETDATE()
    WHERE CodEmpresa = @CodEmpresa AND CodUsuario = @CodUsuario;
END;

CREATE PROCEDURE [dbo].[Usp_Del_DetUsuarioEmpresa]
    @CodEmpresa INT,
    @CodUsuario INT
AS
BEGIN
    UPDATE DetUsuarioEmpresa
    SET IntFlgEliminado = 1,
        FecModificacion = GETDATE()
    WHERE CodEmpresa = @CodEmpresa AND CodUsuario = @CodUsuario;
END;
GO

CREATE PROCEDURE [dbo].[Usp_Sel_DetUsuarioEmpresa_All]
AS
BEGIN
    SELECT 
        de.CodEmpresa, 
        de.CodUsuario, 
        de.VarCargo, 
        de.VarCorreo, 
        de.IntEstado, 
        de.VarNomImagen, 
        de.IntFlgEliminado, 
        de.FecRegistro, 
        de.FecModificacion,
        mu.VarDocIdentidad,
        mu.VarApellidos,
        mu.VarNombres,
        mu.VarPassword,
        mu.VarNumTelefono
    FROM DetUsuarioEmpresa de
    JOIN MaeUsuario mu ON de.CodUsuario = mu.CodUsuario;
END;
GO

CREATE PROCEDURE [dbo].[Usp_Sel_DetUsuarioEmpresa_ById]
    @CodEmpresa INT,
    @CodUsuario INT
AS
BEGIN
    SELECT 
        de.CodEmpresa, 
        de.CodUsuario, 
        de.VarCargo, 
        de.VarCorreo, 
        de.IntEstado, 
        de.VarNomImagen, 
        de.IntFlgEliminado, 
        de.FecRegistro, 
        de.FecModificacion,
        mu.VarDocIdentidad,
        mu.VarApellidos,
        mu.VarNombres,
        mu.VarPassword,
        mu.VarNumTelefono
    FROM DetUsuarioEmpresa de
    JOIN MaeUsuario mu ON de.CodUsuario = mu.CodUsuario
    WHERE de.CodEmpresa = @CodEmpresa AND de.CodUsuario = @CodUsuario;
END;
GO


----------------------------------------------------------------------------------


-- Data de ejemplo
EXEC [dbo].[Usp_Ins_MaeUsuario]
    @TipDocumento = 'DNI',
    @VarDocIdentidad = '12345678',
    @VarApellidos = 'Perez',
    @VarNombres = 'Juan',
    @VarPassword = 'password123',
    @VarNumTelefono = '987654321';

EXEC [dbo].[Usp_Ins_MaeUsuario]
    @TipDocumento = 'DNI',
    @VarDocIdentidad = '87654321',
    @VarApellidos = 'Garcia',
    @VarNombres = 'Maria',
    @VarPassword = 'password456',
    @VarNumTelefono = '912345678';

-- Insert sample data into DetUsuarioEmpresa
EXEC [dbo].[Usp_Ins_DetUsuarioEmpresa]
    @CodEmpresa = 1,
    @CodUsuario = 1,  -- Assuming the first user inserted into MaeUsuario has CodUsuario = 1
    @VarCargo = 'Manager',
    @VarCorreo = 'juan.perez@example.com',
    @IntEstado = 1,
    @VarNomImagen = 'juan.png';

EXEC [dbo].[Usp_Ins_DetUsuarioEmpresa]
    @CodEmpresa = 2,
    @CodUsuario = 2,  -- Assuming the second user inserted into MaeUsuario has CodUsuario = 2
    @VarCargo = 'Developer',
    @VarCorreo = 'maria.garcia@example.com',
    @IntEstado = 1,
    @VarNomImagen = 'maria.png';