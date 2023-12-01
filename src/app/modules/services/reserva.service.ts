import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reserva } from 'src/app/model/reserva';



@Injectable({
  providedIn: 'root'
})

export class ReservaService {

  private url: string = 'http://localhost:8081/reserva';

  constructor(private http: HttpClient) { }
  listar(): Observable<Reserva[]> {
    return this.http.get<Reserva[]>(this.url + '/all');
  }

  crear(reserva: Reserva): Observable<Reserva> {
    return this.http.post<Reserva>(this.url + '/add', reserva)
  }

  editar(id: number, reserva: Reserva) : Observable<Object>{
    return this.http.put(this.url + '/edit/' + id, reserva);
  }
  
  eliminar(id: number): Observable<any> {
    return this.http.delete(this.url + '/' + id);
  }

  IDreserva(id: number): Observable<any> {
    return this.http.get<Reserva>(this.url + '/' + id);
  }
  
}
