import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarReservaComponent } from './registrar-reserva/registrar-reserva.component';

const routes: Routes = [
  {
    path:'',
    component:RegistrarReservaComponent,
    outlet:"child"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrarReservaRoutingModule { }
