import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { viajes } from 'src/app/model/viajes';


@Injectable({
  providedIn: 'root'
})

export class ViajesService {

  private url: string = 'http://localhost:8080/viajes';

  constructor(private http: HttpClient) { }
  listar(): Observable<viajes[]> {
    return this.http.get<viajes[]>(this.url + '/all');
  }

  crear(viaje: viajes){
    return this.http.post<string>(this.url +'/add' , viaje);
  }

  editar(id: number, viaje: viajes) : Observable<Object>{
    return this.http.put(this.url + '/edit/' + id, viaje);
  }
  
  eliminar(id: number): Observable<any> {
    return this.http.delete(this.url + '/delete/' + id);
  }

  IDlibros(id: number): Observable<any> {
    return this.http.get<viajes>(this.url + '/' + id);
  }
  
}
