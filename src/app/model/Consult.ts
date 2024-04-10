import { Patient } from './Patient';
import { Medic } from './Medic';
import { Specialty } from './Specialty';
import { ConsultDetailDTO } from './ConsultDetailDTO';

export class Consult {
  idConsult: number;
  patient: Patient;
  medic: Medic;
  specialty: Specialty;
  numConsult: string;
  consultDate: Date;
  details: ConsultDetailDTO[];

  constructor(
    idConsult: number,
    patient: Patient,
    medic: Medic,
    specialty: Specialty,
    numConsult: string,
    consultDate: Date,
    details: ConsultDetailDTO[]
  ) 
  
  {
    this.idConsult = idConsult;
    this.patient = patient;
    this.medic = medic;
    this.specialty = specialty;
    this.numConsult = numConsult;
    this.consultDate = consultDate;
    this.details = details;
  }
}