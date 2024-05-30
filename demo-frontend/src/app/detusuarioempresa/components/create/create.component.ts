import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import { DetusuarioempresaService } from 'src/app/services/detusuarioempresa.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateDetUsuarioEmpresaComponent implements OnInit {

  formDetUsuarioEmpresa: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private detUsuarioEmpresaService: DetusuarioempresaService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.formDetUsuarioEmpresa = formBuilder.group({
      codEmpresa: [null, [Validators.required]],
      codUsuario: [null, [Validators.required]],
      varCargo: [null, [Validators.required]],
      varCorreo: [null, [Validators.required, Validators.email]],
      intEstado: [null, [Validators.required]],
      varNomImagen: [null, [Validators.required]]
    });
  }

  ngOnInit(): void {}

  guardar(): void {
    const detUsuarioEmpresa = this.formDetUsuarioEmpresa.getRawValue();
    this.detUsuarioEmpresaService.create(detUsuarioEmpresa).subscribe(() => {
      alert('Se creó correctamente');
      this.back();
    });
  }

  back(): void {
    this.router.navigate(['..'], { relativeTo: this.activatedRoute });
  }

  cancelar():void{
    this.back();
  }
}