import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetusuarioempresaRoutingModule } from './detusuarioempresa-routing.module';
import { ListComponent } from './components/list/list.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { CreateDetUsuarioEmpresaComponent } from './components/create/create.component';
import { EditDetUsuarioEmpresaComponent } from './components/edit/edit.component';


@NgModule({
  declarations: [
    ListComponent,
    CreateDetUsuarioEmpresaComponent,
    EditDetUsuarioEmpresaComponent
  ],
  imports: [
    CommonModule,
    DetusuarioempresaRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule
  ]
})
export class DetusuarioempresaModule { }
