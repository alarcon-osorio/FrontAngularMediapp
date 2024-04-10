import { Component, OnInit } from '@angular/core';
import { Exam } from '../../model/Exam';
import { ExamsService } from '../../service/exams/exams.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-exams',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './exams.component.html',
  styleUrl: './exams.component.css'
})
export default class ExamsComponent implements OnInit{

  exams: Exam[] = [];

  constructor(private examService: ExamsService, private router:Router) {} 

  ngOnInit(): void {
    this.listExams();
  }

  listExams(): void {
    this.examService.list().subscribe(
      (data: Exam[]) => {
        console.log(data)
        this.exams = data;
        console.log(data);
      },
      (error: any) => { // Maneja los posibles errores
        console.error('Error al obtener la lista de consultas:', error);
      }
    );
  }

}

