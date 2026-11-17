import { Component } from '@angular/core';
import { DatePipe, DecimalPipe, UpperCasePipe } from '@angular/common';
import { Evento as EventoModel } from './evento.model';
import { TituloPipe } from '../pipes/titulo-pipe';
import { ResumoPipe } from '../pipes/resumo-pipe';

@Component({
  selector: 'app-evento',
  imports: [DatePipe, UpperCasePipe, DecimalPipe, TituloPipe, ResumoPipe],
  templateUrl: './evento.html',
  styleUrl: './evento.css'
})
export class Evento {
  eventos: EventoModel[] = [
    { id: 1, titulo: 'Semana de Tecnologia', data: '2026-11-20', local: 'Auditorio', vagas: 1200 },
    { id: 2, titulo: 'Oficina de Angular', data: '2026-12-01', local: 'Laboratorio 3', vagas: 40 },
    { id: 3, titulo: 'Feira de Projetos', data: '2026-11-09', local: 'Patio central', vagas: 800 }
  ];
}
