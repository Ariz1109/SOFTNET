using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Demo.Model
{
    public class DetUsuarioEmpresa
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
    }
}
