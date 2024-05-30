import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DetusuarioempresaService } from 'src/app/services/detusuarioempresa.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditDetUsuarioEmpresaComponent implements OnInit {

  formDetUsuarioEmpresa: FormGroup;
  codEmpresa: number = 0;
  codUsuario: number = 0;

  constructor(
    private formBuilder: FormBuilder,
    private detUsuarioEmpresaService: DetusuarioempresaService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.formDetUsuarioEmpresa = this.formBuilder.group({
      codEmpresa: [{ value: null, disabled: true }, [Validators.required]],
      codUsuario: [{ value: null, disabled: true }, [Validators.required]],
      varCargo: [null, [Validators.required]],
      varCorreo: [null, [Validators.required, Validators.email]],
      intEstado: [null, [Validators.required]],
      varNomImagen: [null, [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.codEmpresa = params['codEmpresa'];
      this.codUsuario = params['codUsuario'];
      this.detUsuarioEmpresaService.getById(this.codEmpresa, this.codUsuario).subscribe(data => {
        this.formDetUsuarioEmpresa.patchValue(data);
      });
    });
  }

  cargarUsuarioEmpresa(codEmpresa: number, codUsuario: number): void {
    this.detUsuarioEmpresaService.getById(codEmpresa, codUsuario).subscribe(detUsuarioEmpresa => {
      this.formDetUsuarioEmpresa.patchValue(detUsuarioEmpresa);
    });
  }

  guardar(): void {
    if (this.formDetUsuarioEmpresa.valid) {
      const detUsuarioEmpresa = this.formDetUsuarioEmpresa.getRawValue();
      detUsuarioEmpresa.codEmpresa = this.codEmpresa;
      detUsuarioEmpresa.codUsuario = this.codUsuario;
      this.detUsuarioEmpresaService.update(detUsuarioEmpresa).subscribe(() => {
        alert('Usuario actualizado correctamente');
        this.back();
      }, error => {
        console.error('Error updating user:', error);
        alert('Ocurrió un error al actualizar el usuario');
      });
    }
  }

  back(): void {
    this.router.navigate(['../../..'], { relativeTo: this.activatedRoute });
  }

  cancelar(): void {
    this.back();
  }
}