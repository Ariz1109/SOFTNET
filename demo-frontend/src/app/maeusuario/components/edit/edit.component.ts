import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MaeusaurioService } from 'src/app/services/maeusuario.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditMaeUsuarioComponent implements OnInit {

  formMaeUsuario: FormGroup;
  codUsuario: number = 0;

  constructor(
    private formBuilder: FormBuilder,
    private maeUsuarioService: MaeusaurioService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.formMaeUsuario = this.formBuilder.group({
      codUsuario: [{ value: null, disabled: true }, [Validators.required]],
      tipDocumento: [null, [Validators.required]],
      varDocIdentidad: [null, [Validators.required]],
      varApellidos: [null, [Validators.required]],
      varNombres: [null, [Validators.required]],
      varPassword: [null, [Validators.required]],
      varNumTelefono: [null, [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.codUsuario = this.activatedRoute.snapshot.params['codUsuario'];
    this.maeUsuarioService.getById(this.codUsuario).subscribe(data => {
      this.formMaeUsuario.patchValue(data);
    });
  }

  guardar(): void {
    if (this.formMaeUsuario.valid) {
      const maeUsuario = this.formMaeUsuario.getRawValue();
      console.log('Datos a enviar: ', maeUsuario);
      this.maeUsuarioService.update(this.codUsuario, maeUsuario).subscribe(() => {
        alert('Usuario actualizado correctamente');
        this.router.navigate(['../../'], { relativeTo: this.activatedRoute });
      }, error => {
        alert('Error al actualizar usuario');
      });
    }
  }

  back(): void {
    this.router.navigate(['../..'], { relativeTo: this.activatedRoute });
  }

  cancelar(): void {
    this.back();
  }
}