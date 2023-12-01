import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { RegistrarReservaComponent } from './registrar-reserva/registrar-reserva.component';
import { RegistrarReservaRoutingModule } from './registrar-routing.module';


@NgModule({
  declarations: [
    RegistrarReservaComponent,
  ],
  imports: [
    CommonModule,
    RegistrarReservaRoutingModule,
    FormsModule
  ]
})
export class RegistrarModule { }
