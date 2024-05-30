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
    public class DetUsuarioEmpresaController : ControllerBase
    {
        private readonly IDetUsuarioEmpresaRepository _detUsuarioEmpresaRepository;
        private readonly IDetUsuarioEmpresaQueries _detUsuarioEmpresaQueries;

        public DetUsuarioEmpresaController(IDetUsuarioEmpresaRepository detUsuarioEmpresaRepository, IDetUsuarioEmpresaQueries detUsuarioEmpresaQueries)
        {
            _detUsuarioEmpresaRepository = detUsuarioEmpresaRepository;
            _detUsuarioEmpresaQueries = detUsuarioEmpresaQueries;
        }

        [HttpGet]
        [Route("{codEmpresa}/{codUsuario}")]
        public async Task<ActionResult> GetById([FromRoute] int codEmpresa, [FromRoute] int codUsuario)
        {
            var result = await _detUsuarioEmpresaQueries.GetById(codEmpresa, codUsuario);

            if (result == null)
                return NotFound();

            return Ok(result);
        }

        [HttpGet]
        public async Task<ActionResult> GetAll()
        {
            var result = await _detUsuarioEmpresaQueries.GetAll();
            return Ok(result);
        }

        [HttpPost]
        public async Task<ActionResult> Create([FromBody] Model.DetUsuarioEmpresa detUsuarioEmpresa)
        {
            var result = await _detUsuarioEmpresaRepository.Create(detUsuarioEmpresa);
            return Ok(result);
        }

        [HttpPut("{codEmpresa}/{codUsuario}")]
        public async Task<IActionResult> Update(int codEmpresa, int codUsuario, [FromBody] DetUsuarioEmpresa detUsuarioEmpresa)
        {
            if (codEmpresa != detUsuarioEmpresa.CodEmpresa || codUsuario != detUsuarioEmpresa.CodUsuario)
            {
                return BadRequest("Los códigos no coinciden.");
            }

            var result = await _detUsuarioEmpresaRepository.Update(detUsuarioEmpresa);
            if (result == 0)
            {
                return NotFound("El usuario no fue encontrado.");
            }

            return Ok(result);
        }

        [HttpDelete]
        [Route("{codEmpresa}/{codUsuario}")]
        public async Task<ActionResult> Delete([FromRoute] int codEmpresa, [FromRoute] int codUsuario)
        {
            var result = await _detUsuarioEmpresaRepository.Delete(codEmpresa, codUsuario);
            return Ok(result);
        }
    }
}