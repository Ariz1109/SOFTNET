using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Demo.ViewModel
{
    public class DetUsuarioEmpresaViewModel
    {
        public int CodEmpresa { get; set; }
        public int CodUsuario { get; set; }
        public string VarCargo { get; set; }
        public string VarCorreo { get; set; }
        public int IntEstado { get; set; }
        public string VarNomImagen { get; set; }
        public bool IntFlgEliminado { get; set; }
        public DateTime FecRegistro { get; set; }
        public DateTime FecModificacion { get; set; }
        public string VarDocIdentidad { get; set; }
        public string VarApellidos { get; set; }
        public string VarNombres { get; set; }
        public string VarPassword { get; set; }
        public string VarNumTelefono { get; set; }
    
    }
}
