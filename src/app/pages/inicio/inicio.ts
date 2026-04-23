import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  imports: [],
  standalone: true,
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio implements OnInit{
  dataLogin: any = {
    usuario: "test",
    clave: "test"
  }
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit():void {

  }

  IniciarSesion(){
    this.authService.IniciarSesion(this.dataLogin).subscribe({
      next: (data) => {
        localStorage.setItem('jwt',data.token)
        this.router.navigate(['/compra']);
      },
      error: (err) => {
        console.log("ocurrio un error al iniciar sesion")
      },
    })
  }
}
