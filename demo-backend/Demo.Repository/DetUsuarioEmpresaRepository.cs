using Dapper;
using Demo.Model;
using Microsoft.Extensions.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Threading.Tasks;

namespace Demo.Repository
{
    public class DetUsuarioEmpresaRepository : IDetUsuarioEmpresaRepository
    {
        private readonly string _connectionString;

        public DetUsuarioEmpresaRepository(IConfiguration configuration)
        {
            _connectionString = configuration["ConnectionStrings:SQL"];
        }

        public async Task<int> Create(DetUsuarioEmpresa detUsuarioEmpresa)
        {
            int result;
            var parameters = new DynamicParameters();
            parameters.Add("@CodEmpresa", detUsuarioEmpresa.CodEmpresa);
            parameters.Add("@CodUsuario", detUsuarioEmpresa.CodUsuario);
            parameters.Add("@VarCargo", detUsuarioEmpresa.VarCargo);
            parameters.Add("@VarCorreo", detUsuarioEmpresa.VarCorreo);
            parameters.Add("@IntEstado", detUsuarioEmpresa.IntEstado);
            parameters.Add("@VarNomImagen", detUsuarioEmpresa.VarNomImagen);

            using (var connection = new SqlConnection(_connectionString))
            {
                result = await connection.ExecuteAsync("[dbo].[Usp_Ins_DetUsuarioEmpresa]", parameters, commandType: CommandType.StoredProcedure);
            }

            return result;
        }

        public async Task<int> Delete(int codEmpresa, int codUsuario)
        {
            int result;
            var parameters = new DynamicParameters();
            parameters.Add("@CodEmpresa", codEmpresa);
            parameters.Add("@CodUsuario", codUsuario);

            using (var connection = new SqlConnection(_connectionString))
            {
                result = await connection.ExecuteAsync("[dbo].[Usp_Del_DetUsuarioEmpresa]", parameters, commandType: CommandType.StoredProcedure);
            }

            return result;
        }

        public async Task<int> Update(DetUsuarioEmpresa detUsuarioEmpresa)
        {
            int result;
            var parameters = new DynamicParameters();
            parameters.Add("@CodEmpresa", detUsuarioEmpresa.CodEmpresa);
            parameters.Add("@CodUsuario", detUsuarioEmpresa.CodUsuario);
            parameters.Add("@VarCargo", detUsuarioEmpresa.VarCargo);
            parameters.Add("@VarCorreo", detUsuarioEmpresa.VarCorreo);
            parameters.Add("@IntEstado", detUsuarioEmpresa.IntEstado);
            parameters.Add("@VarNomImagen", detUsuarioEmpresa.VarNomImagen);
            parameters.Add("@IntFlgEliminado", detUsuarioEmpresa.IntFlgEliminado);

            using (var connection = new SqlConnection(_connectionString))
            {
                result = await connection.ExecuteAsync("[dbo].[Usp_Upd_DetUsuarioEmpresa]", parameters, commandType: CommandType.StoredProcedure);
            }

            return result;
        }
    }
}