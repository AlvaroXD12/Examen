import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { viajesComponent } from './listar/listar.component';

const routes: Routes = [
  {
    path:'',
    component:viajesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViajesRoutingModule { }
