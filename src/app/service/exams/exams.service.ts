import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Exam } from '../../model/Exam';

@Injectable({
  providedIn: 'root'
})
export class ExamsService {

  constructor(private http: HttpClient) {} 

  basePath = 'http://localhost:8080/';

  public list(): Observable<Exam[]> {
    return this.http.get<Exam[]>('http://localhost:8091/exams');
  }

}
