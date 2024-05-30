import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import { MaeusaurioService } from 'src/app/services/maeusuario.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateMaeUsuarioComponent implements OnInit {

  formMaeUsuario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private maeUsuarioService: MaeusaurioService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.formMaeUsuario = formBuilder.group({
      tipDocumento: [null, [Validators.required]],
      varDocIdentidad: [null, [Validators.required]],
      varApellidos: [null, [Validators.required]],
      varNombres: [null, [Validators.required]],
      varPassword: [null, [Validators.required]],
      varNumTelefono: [null, [Validators.required]]
    });
  }

  ngOnInit(): void {}

  guardar(): void {
    const maeUsuario = this.formMaeUsuario.getRawValue();
    this.maeUsuarioService.create(maeUsuario).subscribe(() => {
      alert('Se creó correctamente');
      this.back();
    });
  }

  back(): void {
    this.router.navigate(['..'], { relativeTo: this.activatedRoute });
  }

  cancelar(): void {
    this.back();
  }
}