import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'maeusuario',
    loadChildren:()=>import('./maeusuario/maeusuario.module').then((x) => x.MaeusuarioModule)
  },
  {
    path:'detusuarioempresa',
    loadChildren:()=>import('./detusuarioempresa/detusuarioempresa.module').then((x) => x.DetusuarioempresaModule)
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
