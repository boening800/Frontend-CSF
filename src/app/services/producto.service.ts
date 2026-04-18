import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private baseUrl = `${environment.apiUrl}/Producto`;

  constructor(private http: HttpClient) {}

  getProductos(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

//   getProductById(id: number): Observable<any> {
//     return this.http.get<any>(`${this.apiUrl}/${id}`);
//   }

//   createProduct(data: any): Observable<any> {
//     return this.http.post(this.apiUrl, data);
//   }

//   updateProduct(id: number, data: any): Observable<any> {
//     return this.http.put(`${this.apiUrl}/${id}`, data);
//   }

//   deleteProduct(id: number): Observable<any> {
//     return this.http.delete(`${this.apiUrl}/${id}`);
//   }
}