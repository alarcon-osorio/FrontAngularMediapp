import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Consult } from '../../model/Consult';

const cabecera = {headers: new HttpHeaders({'Authorization': 'Bearer eyJhbGciOiJIUzM4NCJ9.eyJyb2xlIjoiQURNSU4iLCJzdWIiOiJhZG1pbiIsImlhdCI6MTcxMjYzNzMyOCwiZXhwIjoxNzEyNjU1MzI4fQ.stwX7Ts7J6_uX89H8PykSYu9X12-4Wzvyo2gcCGwR006bcQ8dMEJXWVCoR--K0ye'})};

@Injectable({
  providedIn: 'root'
})
export class ConsultsService {

  constructor(private http: HttpClient) {} 

  basePath = 'http://localhost:8080';

  public list(): Observable<Consult[]> {
    return this.http.get<Consult[]>(`${this.basePath}/consults?page=1&size=0`, cabecera);
  }

  get(id: number){
    return this.http.get(`url/${id}`)
  }

  create(consults : any){
    return this.http.post('urlbackend', consults)
  }

  update(id: number, consults : any){
    return this.http.put(`url/${id}`, consults)
  }

  delete(id: number){
    return this.http.delete(`url/${id}`)
  }

}
