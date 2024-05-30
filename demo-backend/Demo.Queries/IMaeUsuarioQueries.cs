using Demo.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Demo.Queries
{
    public interface IMaeUsuarioQueries
    {
        Task<IEnumerable<MaeUsuarioViewModel>> GetAll();
        Task<MaeUsuarioViewModel> GetById(int codUsuario);
    }
}
