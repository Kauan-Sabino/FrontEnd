import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './view/inicio/inicio.component';
import { VagasComponent } from './view/vagas/vagas.component';
import { CurriculosComponent } from './view/curriculos/curriculos.component';

const routes: Routes = [
   {path:"", component: InicioComponent},
   {path: "curriculos" , component:CurriculosComponent},
   {path: "vagas" , component: VagasComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
