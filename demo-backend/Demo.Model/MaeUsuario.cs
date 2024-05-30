using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Demo.Model
{
    public class MaeUsuario
    {
        public int CodUsuario { get; set; }
        public string TipDocumento { get; set; }
        public string VarDocIdentidad { get; set; }
        public string VarApellidos { get; set; }
        public string VarNombres { get; set; }
        public string VarPassword { get; set; }
        public string VarNumTelefono { get; set; }
        public int IntFlgEliminado { get; set; }
        public DateTime FecRegistro { get; set; }
        public DateTime FecModificacion { get; set; }
    }
}
