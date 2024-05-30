using Demo.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Demo.Queries
{
    public interface IDetUsuarioEmpresaQueries
    {
        Task<IEnumerable<DetUsuarioEmpresaViewModel>> GetAll();
        Task<DetUsuarioEmpresaViewModel> GetById(int codEmpresa, int codUsuario);
    }
}
