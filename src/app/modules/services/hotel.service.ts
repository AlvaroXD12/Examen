import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hotel } from 'src/app/model/hotel';




@Injectable({
  providedIn: 'root'
})

export class HotelService {

  private url: string = 'http://localhost:8081/hotel';

  constructor(private http: HttpClient) { }
  listar(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(this.url + '/all');
  }

  crear(hotel: Hotel){
    return this.http.post<string>(this.url +'/add' , hotel);
  }

  editar(id: number, hotel: Hotel) : Observable<Object>{
    return this.http.put(this.url + '/edit/' + id, hotel);
  }
  
  eliminar(id: number): Observable<any> {
    return this.http.delete(this.url + '/delete/' + id);
  }

  IDHotel(id: number): Observable<any> {
    return this.http.get<Hotel>(this.url + '/' + id);
  }
  
}
