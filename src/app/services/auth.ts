import { Injectable } from '@angular/core';
import { environment } from '../../enviroments/enviroment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = `${environment.apiUrl}/JwtAuth`;

  constructor(private http: HttpClient) {

  }

    IniciarSesion(data:any): Observable<any>{
      return this.http.post(this.baseUrl, data);
    }
}
