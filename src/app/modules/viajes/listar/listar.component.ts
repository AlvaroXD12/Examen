import { Component, OnInit} from '@angular/core';
import { viajes } from 'src/app/model/viajes';
import { ViajesService } from '../../services/viajes.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],

})
export class viajesComponent  implements OnInit {
  viajes: viajes[] = [];
  viaje: viajes = new viajes();

  constructor(
    private viajesService: ViajesService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.Listar()
  }
  Listar() {
    this.viajesService.listar().subscribe(data => {
      this.viajes = data;
    });
  }
 
  Eliminar(id: number) {
    this.viajesService.eliminar(id).subscribe(() => {
      this.viajesService.listar().subscribe(data => {
        this.viajes = data;
        console.log(data);
      });
    });
  }
}

