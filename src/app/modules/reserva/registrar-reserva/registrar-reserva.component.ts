import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/cliente';
import { Hotel } from 'src/app/model/hotel';
import { Reserva } from 'src/app/model/reserva';
import { Sucursal } from 'src/app/model/sucursal';
import { Vuelo } from 'src/app/model/vuelo';
import { ReservaService } from '../../services/reserva.service';
import { ClienteService } from '../../services/cliente.service';
import { HotelService } from '../../services/hotel.service';
import { SucursalService } from '../../services/sucursal.service';
import { VueloService } from '../../services/vuelo.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-registrar-reserva',
  templateUrl: './registrar-reserva.component.html',
  styleUrls: ['./registrar-reserva.component.css']
})
export class RegistrarReservaComponent implements OnInit{
  reserva: Reserva = new Reserva();
  cliente: Cliente[] = [];
  hotel: Hotel[] = [];
  sucursal: Sucursal[] = [];
  vuelo: Vuelo[] = [];
  constructor(
    private reservaService: ReservaService,
    private clienteService: ClienteService,
    private hotelService: HotelService,
    private sucursalService: SucursalService,
    private vueloService: VueloService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }
  ngOnInit(): void {
    this.ListarCliente()
    this.ListarHotel()
    this.ListarSucursal()
    this.ListarVuelo()
  }
  onSubmit() {
    this.createTutorial();
  }
  ListarCliente() {
    this.clienteService.listar().subscribe(data => {
      this.cliente = data;  
    });
  }
  ListarHotel() {
    this.hotelService.listar().subscribe(data => {
      this.hotel = data;  
    });
  }
  ListarSucursal() {
    this.sucursalService.listar().subscribe(data => {
      this.sucursal = data;  
    });
  }
  ListarVuelo() {
    this.vueloService.listar().subscribe(data => {
      this.vuelo = data;  
    });
  }
  createTutorial() {
    this.reservaService.crear(this.reserva).subscribe(data => {
      console.log(data);
      this.irReserva();
    });
  }
  irReserva(){
    this.router.navigate(["/home/reserva"]);
  }
  
}
