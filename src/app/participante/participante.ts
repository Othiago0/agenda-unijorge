import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Evento } from '../evento/evento.model';
import { Participante as ParticipanteModel } from './participante.model';
import { TelefonePipe } from '../pipes/telefone-pipe';
import { FormaPagamentoPipe } from '../pipes/forma-pagamento-pipe';
import { IniciaisPipe } from '../pipes/iniciais-pipe';
import { DiasParaPipe } from '../pipes/dias-para-pipe';

@Component({
  selector: 'app-participante',
  imports: [DatePipe, TelefonePipe, FormaPagamentoPipe, IniciaisPipe, DiasParaPipe],
  templateUrl: './participante.html',
  styleUrl: './participante.css'
})
export class Participante {
  evento: Evento = {
    id: 1,
    titulo: 'Semana de Tecnologia',
    data: '2026-11-20',
    local: 'Auditorio',
    vagas: 1200
  };

  participantes: ParticipanteModel[] = [
    { id: 1, eventoId: 1, descricao: 'Maria da Silva Santos', telefone: '71988887777', formaPagamento: 'cartao' },
    { id: 2, eventoId: 1, descricao: '  joão   guedes de brito ', telefone: '7133334444', formaPagamento: 'pix' },
    { id: 3, eventoId: 1, descricao: 'Ana', telefone: '123', formaPagamento: 'boleto' },
    { id: 4, eventoId: 1, descricao: 'Carlos Eduardo', telefone: '', formaPagamento: '' }
  ];
}
