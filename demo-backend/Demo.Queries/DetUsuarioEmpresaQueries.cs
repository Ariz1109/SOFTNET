using Dapper;
using Demo.ViewModel;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Threading.Tasks;

namespace Demo.Queries
{
    public class DetUsuarioEmpresaQueries : IDetUsuarioEmpresaQueries
    {
        private readonly string _connectionString;

        public DetUsuarioEmpresaQueries(IConfiguration configuration)
        {
            _connectionString = configuration["ConnectionStrings:SQL"];
        }

        public async Task<IEnumerable<DetUsuarioEmpresaViewModel>> GetAll()
        {
            IEnumerable<DetUsuarioEmpresaViewModel> result = new List<DetUsuarioEmpresaViewModel>();

            using (var connection = new SqlConnection(_connectionString))
            {
                result = await connection.QueryAsync<DetUsuarioEmpresaViewModel>("[dbo].[Usp_Sel_DetUsuarioEmpresa_All]", commandType: CommandType.StoredProcedure);
            }

            return result;
        }

        public async Task<DetUsuarioEmpresaViewModel> GetById(int codEmpresa, int codUsuario)
        {
            var detUsuarioEmpresaViewModel = new DetUsuarioEmpresaViewModel();

            var parameters = new DynamicParameters();
            parameters.Add("@CodEmpresa", codEmpresa);
            parameters.Add("@CodUsuario", codUsuario);

            using (var connection = new SqlConnection(_connectionString))
            {
                detUsuarioEmpresaViewModel = await connection.QueryFirstOrDefaultAsync<DetUsuarioEmpresaViewModel>("[dbo].[Usp_Sel_DetUsuarioEmpresa_ById]", parameters, commandType: CommandType.StoredProcedure);
            }

            return detUsuarioEmpresaViewModel;
        }
    }
}