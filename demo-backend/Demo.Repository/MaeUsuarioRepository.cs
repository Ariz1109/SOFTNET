using Dapper;
using Demo.Model;
using Microsoft.Extensions.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Threading.Tasks;

namespace Demo.Repository
{
    public class MaeUsuarioRepository : IMaeUsuarioRepository
    {
        private readonly string _connectionString;

        public MaeUsuarioRepository(IConfiguration configuration)
        {
            _connectionString = configuration["ConnectionStrings:SQL"];
        }

        public async Task<int> Create(MaeUsuario maeUsuario)
        {
            int result;
            var parameters = new DynamicParameters();
            parameters.Add("@TipDocumento", maeUsuario.TipDocumento);
            parameters.Add("@VarDocIdentidad", maeUsuario.VarDocIdentidad);
            parameters.Add("@VarApellidos", maeUsuario.VarApellidos);
            parameters.Add("@VarNombres", maeUsuario.VarNombres);
            parameters.Add("@VarPassword", maeUsuario.VarPassword);
            parameters.Add("@VarNumTelefono", maeUsuario.VarNumTelefono);

            using (var connection = new SqlConnection(_connectionString))
            {
                result = await connection.ExecuteAsync("[dbo].[Usp_Ins_MaeUsuario]", parameters, commandType: CommandType.StoredProcedure);
            }

            return result;
        }

        public async Task<int> Delete(int codUsuario)
        {
            int result;
            var parameters = new DynamicParameters();
            parameters.Add("@CodUsuario", codUsuario);

            using (var connection = new SqlConnection(_connectionString))
            {
                result = await connection.ExecuteAsync("[dbo].[Usp_Del_MaeUsuario]", parameters, commandType: CommandType.StoredProcedure);
            }

            return result;
        }

        public async Task<int> Update(MaeUsuario maeUsuario)
        {
            int result;
            var parameters = new DynamicParameters();
            parameters.Add("@CodUsuario", maeUsuario.CodUsuario);
            parameters.Add("@TipDocumento", maeUsuario.TipDocumento);
            parameters.Add("@VarDocIdentidad", maeUsuario.VarDocIdentidad);
            parameters.Add("@VarApellidos", maeUsuario.VarApellidos);
            parameters.Add("@VarNombres", maeUsuario.VarNombres);
            parameters.Add("@VarPassword", maeUsuario.VarPassword);
            parameters.Add("@VarNumTelefono", maeUsuario.VarNumTelefono);

            using (var connection = new SqlConnection(_connectionString))
            {
                result = await connection.ExecuteAsync("[dbo].[Usp_Upd_MaeUsuario]", parameters, commandType: CommandType.StoredProcedure);
            }

            return result;
        }
    }
}
