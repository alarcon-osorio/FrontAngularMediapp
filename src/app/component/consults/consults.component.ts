import { Component, OnInit } from '@angular/core';
import { Consult } from '../../model/Consult';
import { ConsultsService } from '../../service/consults/consults.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-consults',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './consults.component.html',
  styleUrl: './consults.component.css',
})
export default class ConsultsComponent implements OnInit{

  consults: Consult[] = [];

  constructor(private consultsService: ConsultsService, private router:Router) {} 

  ngOnInit(): void {
    this.listConsults();
  }

  listConsults(): void {
    this.consultsService.list().subscribe(
      (data: Consult[]) => {
        console.log(data)
        this.consults = data;
        console.log(data);
      },
      (error: any) => { // Maneja los posibles errores
        console.error('Error al obtener la lista de consultas:', error);
      }
    );
  }

}
