import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class CompraService {
  private baseUrl = `${environment.apiUrl}/Compra`;

  constructor(private http: HttpClient) {}

  RegistrarCompra(data: any): Observable<any> {
    return this.http.post(this.baseUrl, data);
  }


}