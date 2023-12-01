import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/model/cliente';




@Injectable({
  providedIn: 'root'
})

export class ClienteService {

  private url: string = 'http://localhost:8081/cliente';

  constructor(private http: HttpClient) { }
  listar(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.url + '/all');
  }

  crear(cliente: Cliente){
    return this.http.post<string>(this.url +'/add' , cliente);
  }

  editar(id: number, cliente: Cliente) : Observable<Object>{
    return this.http.put(this.url + '/edit/' + id, cliente);
  }
  
  eliminar(id: number): Observable<any> {
    return this.http.delete(this.url + '/delete/' + id);
  }

  IDcliente(id: number): Observable<any> {
    return this.http.get<Cliente>(this.url + '/' + id);
  }
  
}
