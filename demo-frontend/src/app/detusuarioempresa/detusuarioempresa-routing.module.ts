import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDetUsuarioEmpresaComponent } from './components/create/create.component';
import { ListComponent } from './components/list/list.component';
import { EditDetUsuarioEmpresaComponent } from './components/edit/edit.component';

const routes: Routes = [
  {path:'',component:ListComponent},
  { path:'create', component: CreateDetUsuarioEmpresaComponent },
  { path: 'edit/:codEmpresa/:codUsuario', component: EditDetUsuarioEmpresaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetusuarioempresaRoutingModule { }
