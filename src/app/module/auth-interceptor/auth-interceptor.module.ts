import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(
    request: HttpRequest<any>, 
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Obtener el token de autenticación de localStorage u otro lugar
    const authToken = 'eyJhbGciOiJIUzM4NCJ9.eyJyb2xlIjoiQURNSU4iLCJzdWIiOiJhZG1pbiIsImlhdCI6MTcxMjYzMzcyNSwiZXhwIjoxNzEyNjUxNzI1fQ.ksHdd37oOzJpr0icC_H0ceyMs7SYeQs3D9JQ5giheG2SECARP5xH3Crz4gvjbzqd';
    console.log("----")
    // Agregar el token de autenticación a la solicitud
    if (authToken) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${authToken}`
        }
      });
    }

    // Pasar la solicitud al siguiente manipulador
    return next.handle(request);
  }
}
