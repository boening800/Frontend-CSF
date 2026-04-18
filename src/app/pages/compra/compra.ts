import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { CommonModule } from '@angular/common';
import { CompraService } from '../../services/compra.service';

@Component({
  selector: 'app-compra',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './compra.html',
  styleUrl: './compra.css',
})
export class Compra implements OnInit{
  productos: any[] = [];
  cantidadProductos: number = 0;
  ArregloProductos: any[] = [];
  Mensaje = '';
  showToast = false;

  constructor(
    private productoService: ProductoService,
    private compraService: CompraService,
    private appRef: ChangeDetectorRef) {}
  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(): void{
    this.productoService.getProductos().subscribe({
      next: (data) => {
        this.productos = data;
        console.log(this.productos)
        this.appRef?.detectChanges();
      },
      error: (err) => {
        console.error('Error al cargar productos', err);
      }
    });
  }

  agregarProducto(idProducto:number, costo:number){
    this.cantidadProductos = this.cantidadProductos + 1;
    this.ArregloProductos = [...this.ArregloProductos,{id_producto:idProducto, costo: costo, cantidad: 1}]

  }

  ComprarProductos(){
    if(this.cantidadProductos > 0){
      this.compraService.RegistrarCompra(this.ArregloProductos).subscribe({
        next: (data) => {
          console.log(data)
          this.showToast = true;
          this.Mensaje = 'Registro exitoso ✔';
          this.cantidadProductos = 0;
          setTimeout(() => {
          this.showToast = false;
        }, 3000);
          this.appRef?.detectChanges();
        },error: (err) => {
          console.error('Error al comprar', err);
        }
      })
    } else {
      this.showToast = true;
      this.Mensaje = 'Debe agregar productos';
        setTimeout(() => {
          this.showToast = false;
        }, 3000);
        this.appRef?.detectChanges();
    }

  }
}
