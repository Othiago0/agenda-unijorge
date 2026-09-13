import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-pessoa',
  styleUrl: './pessoa.css',
  templateUrl: './pessoa.html',
})
export class Pessoa {
  nome = 'Thiago';
  curso = 'Análise e Desenvolvimento de Sistemas'; 
  email = 'thiago@email.com';
}
