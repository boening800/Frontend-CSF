import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHandlerFn, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';


export function authInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn){
  
  console.log('INTERCEPTOR FUNCIONANDO');

  const token : string =localStorage.getItem('jwt')!;

  const newReq = req.clone({
    headers: req.headers.append('authorization', `Bearer ${ token }`),
  });
  
   return next(newReq);
}
