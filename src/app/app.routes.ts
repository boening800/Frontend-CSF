import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import { Compra } from './pages/compra/compra';
import { Venta } from './pages/venta/venta';
import { Productos } from './pages/productos/productos';

export const routes: Routes = [
    { path:'', component: Inicio },
    { path:'venta', component: Venta },
    { path:'compra', component: Compra },
    { path:'productos', component: Productos }
];
