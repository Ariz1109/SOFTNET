using Dapper;
using Demo.ViewModel;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Threading.Tasks;

namespace Demo.Queries
{
    public class MaeUsuarioQueries : IMaeUsuarioQueries
    {
        private readonly string _connectionString;

        public MaeUsuarioQueries(IConfiguration configuration)
        {
            _connectionString = configuration["ConnectionStrings:SQL"];
        }

        public async Task<IEnumerable<MaeUsuarioViewModel>> GetAll()
        {
            IEnumerable<MaeUsuarioViewModel> result = new List<MaeUsuarioViewModel>();

            using (var connection = new SqlConnection(_connectionString))
            {
                result = await connection.QueryAsync<MaeUsuarioViewModel>("[dbo].[Usp_Sel_MaeUsuario_All]", commandType: CommandType.StoredProcedure);
            }

            return result;
        }

        public async Task<MaeUsuarioViewModel> GetById(int codUsuario)
        {
            var maeUsuarioViewModel = new MaeUsuarioViewModel();

            var parameters = new DynamicParameters();
            parameters.Add("@CodUsuario", codUsuario);

            using (var connection = new SqlConnection(_connectionString))
            {
                maeUsuarioViewModel = await connection.QueryFirstOrDefaultAsync<MaeUsuarioViewModel>("[dbo].[Usp_Sel_MaeUsuario_ById]", parameters, commandType: CommandType.StoredProcedure);
            }

            return maeUsuarioViewModel;
        }
    }
}