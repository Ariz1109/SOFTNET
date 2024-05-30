import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { CreateMaeUsuarioComponent } from './components/create/create.component';
import { EditMaeUsuarioComponent } from './components/edit/edit.component';

const routes: Routes = [
  {path:'',component:ListComponent},
  {path:'create',component:CreateMaeUsuarioComponent},
  {path:'edit/:codUsuario', component: EditMaeUsuarioComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaeusuarioRoutingModule { }
