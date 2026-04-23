import { Routes } from '@angular/router';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full'
    },
    { path:'inicio', loadComponent: () => import('./pages/inicio/inicio').then(c => c.Inicio) },
    { path:'ventas', canActivate: [authGuard], loadComponent: () => import('./pages/venta/venta').then(c => c.Venta) },
    { path:'compra', canActivate: [authGuard], loadComponent: () => import('./pages/compra/compra').then(c => c.Compra) },
    { path:'productos', canActivate: [authGuard], loadComponent: () => import('./pages/productos/productos').then(c => c.Productos) },
];
