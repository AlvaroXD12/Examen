import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sucursal } from 'src/app/model/sucursal';



@Injectable({
  providedIn: 'root'
})

export class SucursalService {

  private url: string = 'http://localhost:8081/sucursal';

  constructor(private http: HttpClient) { }
  listar(): Observable<Sucursal[]> {
    return this.http.get<Sucursal[]>(this.url + '/all');
  }

  crear(sucursal: Sucursal){
    return this.http.post<string>(this.url +'/add' , sucursal);
  }

  editar(id: number, sucursal: Sucursal) : Observable<Object>{
    return this.http.put(this.url + '/edit/' + id, sucursal);
  }
  
  eliminar(id: number): Observable<any> {
    return this.http.delete(this.url + '/delete/' + id);
  }

  IDsucursal(id: number): Observable<any> {
    return this.http.get<Sucursal>(this.url + '/' + id);
  }
  
}
