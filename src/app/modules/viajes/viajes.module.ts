import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSortModule } from '@angular/material/sort';
import { viajesComponent } from './listar/listar.component';
import { MatButtonModule } from '@angular/material/button';
import { ViajesRoutingModule } from './viajes-routing.module';


@NgModule({
  declarations: [
    viajesComponent,
  ],
  imports: [
    CommonModule,
    ViajesRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule,
    MatSortModule,
    MatButtonModule,
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ViajesModule { }
