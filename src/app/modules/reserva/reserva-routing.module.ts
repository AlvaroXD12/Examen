import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarReservaComponent } from './listar-reserva/listar-reserva.component';

const routes: Routes = [
  {
    path:'',
    component:ListarReservaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservaRoutingModule { }
