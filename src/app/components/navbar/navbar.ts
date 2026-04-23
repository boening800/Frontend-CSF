import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  standalone: true,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit{

  flag:boolean = true;
  constructor(){

  }
  ngOnInit(): void {
    const token = localStorage.getItem('jwt');

    if (token) {
      this.flag = true;
    }else {
      this.flag = false;
    }
  }

  CerrarSesion(){
    this.flag = false;
    localStorage.clear();
  }
}
