using Demo.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Demo.Repository
{
    public interface IDetUsuarioEmpresaRepository
    {
        Task<int> Create(DetUsuarioEmpresa DetUsuarioEmpresa);

        Task<int> Update(DetUsuarioEmpresa DetUsuarioEmpresa);

        Task<int> Delete(int codEmpresa, int codUsuario);
    }
}
