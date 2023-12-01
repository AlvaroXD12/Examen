import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vuelo } from 'src/app/model/vuelo';



@Injectable({
  providedIn: 'root'
})

export class VueloService {

  private url: string = 'http://localhost:8081/vuelo';

  constructor(private http: HttpClient) { }
  listar(): Observable<Vuelo[]> {
    return this.http.get<Vuelo[]>(this.url + '/all');
  }

  crear(vuelo: Vuelo){
    return this.http.post<string>(this.url +'/add' , vuelo);
  }

  editar(id: number, vuelo: Vuelo) : Observable<Object>{
    return this.http.put(this.url + '/edit/' + id, vuelo);
  }
  
  eliminar(id: number): Observable<any> {
    return this.http.delete(this.url + '/delete/' + id);
  }

  IDvuelo(id: number): Observable<any> {
    return this.http.get<Vuelo>(this.url + '/' + id);
  }
  
}
