using Demo.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Demo.Repository
{
    public interface IMaeUsuarioRepository
    {
        Task<int> Create(MaeUsuario maeUsuario);
        Task<int> Update(MaeUsuario maeUsuario);
        Task<int> Delete(int codUsuario);
    }
}
