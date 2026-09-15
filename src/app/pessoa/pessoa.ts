import { Component } from '@angular/core';
import { Pessoa as PessoaModel } from './pessoa.model';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.html',
  styleUrl: './pessoa.css'
})
export class Pessoa {
  pessoas: PessoaModel[] = [
  {
id: 1,
nome:'Ana Souza',
curso:'Engenharia de Computação',
email:'ana@exemplo.com',
telefone:'7199999999',
ativo: true,
vinculo:'aluno'
  },
  {  
id: 2,
nome:'João',
curso:'Engenharia de Software',
email:'joao@exemplo.com',
telefone:'71999999998',
ativo:true,
vinculo:'professor'  
  },
  {
    id:3,
    nome:'Maria',
    curso: 'Analise e desenvolvimento de Sistemas',
    email:'maria@exemplo.com',
    ativo:true,
    vinculo:'convidado'
  },
  {
    id:4,
    nome:'cibele',
    curso:'enfermagem',
    email:'cibele@maismais.com',
    telefone:'719123478',
    ativo:true,
    vinculo:'aluno'
  }
];
}