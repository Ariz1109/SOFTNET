import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaeusuarioRoutingModule } from './maeusuario-routing.module';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from './components/list/list.component';
import { CreateMaeUsuarioComponent } from './components/create/create.component';
import { MatInputModule } from '@angular/material/input';
import { EditMaeUsuarioComponent } from './components/edit/edit.component';


@NgModule({
  declarations: [
    ListComponent,
    CreateMaeUsuarioComponent,
    EditMaeUsuarioComponent
  ],
  imports: [
    CommonModule,
    MaeusuarioRoutingModule,
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
export class MaeusuarioModule { }
