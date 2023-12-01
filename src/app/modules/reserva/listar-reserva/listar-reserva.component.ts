import { Component, OnInit } from '@angular/core';
import { Reserva } from 'src/app/model/reserva';
import { ReservaService } from '../../services/reserva.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-reserva',
  templateUrl: './listar-reserva.component.html',
  styleUrls: ['./listar-reserva.component.css']
})
export class ListarReservaComponent implements OnInit {
  reserva: Reserva[] =[];
  reservas:Reserva = new Reserva();

  constructor(
    private reservaService: ReservaService,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.Listar()
  }
  Listar() {
    this.reservaService.listar().subscribe(data => {
      this.reserva = data;
    });
  }
  Eliminar(id: number): void {
    this.reservaService.eliminar(id).subscribe(() => {
      this.reservaService.listar().subscribe(data => {
        this.reserva = data;     
      });
    });
  }
}
