using Demo.Model;
using Demo.Queries;
using Demo.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Demo.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MaeUsuarioController : ControllerBase
    {
        private readonly IMaeUsuarioRepository _maeUsuarioRepository;
        private readonly IMaeUsuarioQueries _maeUsuarioQueries;

        public MaeUsuarioController(IMaeUsuarioRepository maeUsuarioRepository, IMaeUsuarioQueries maeUsuarioQueries)
        {
            _maeUsuarioRepository = maeUsuarioRepository;
            _maeUsuarioQueries = maeUsuarioQueries;
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<ActionResult> GetById([FromRoute] int id)
        {
            var result = await _maeUsuarioQueries.GetById(id);

            if (result == null)
                return NotFound();

            return Ok(result);
        }

        [HttpGet]
        public async Task<ActionResult> GetAll()
        {
            var result = await _maeUsuarioQueries.GetAll();
            return Ok(result);
        }

        [HttpPost]
        public async Task<ActionResult> Create([FromBody] Model.MaeUsuario maeUsuario)
        {
            var result = await _maeUsuarioRepository.Create(maeUsuario);
            return Ok(result);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] MaeUsuario maeUsuario)
        {
            if (id != maeUsuario.CodUsuario)
            {
                return BadRequest("Los códigos no coinciden.");
            }

            var result = await _maeUsuarioRepository.Update(maeUsuario);
            if (result == 0)
            {
                return NotFound("El usuario no fue encontrado.");
            }

            return Ok(result);
        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<ActionResult> Delete([FromRoute] int id)
        {
            var result = await _maeUsuarioRepository.Delete(id);
            return Ok(result);
        }
    }
}