import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'telefone' })
export class TelefonePipe implements PipeTransform {
  transform(valor: string | null | undefined): string {
    if (!valor) return '';
    const d = valor.replace(/\D/g, ''); // só dígitos
    if (d.length === 11) return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`; // celular
    if (d.length === 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`; // fixo
    return valor; // não reconhece: devolve como chegou
  }
}
