import { Pipe, PipeTransform } from '@angular/core';

const LIGACAO = new Set(['de', 'da', 'do', 'das', 'dos', 'e']);

@Pipe({ name: 'iniciais' })
export class IniciaisPipe implements PipeTransform {
  transform(valor: string | null | undefined): string {
    if (!valor) return '';
    const partes = valor
      .trim()
      .split(/\s+/)
      .filter(p => p && !LIGACAO.has(p.toLowerCase()));
    if (partes.length === 0) return ''; // entrada só com espaços ou só com ligações
    const primeira = partes[0][0];
    const ultima = partes.length > 1 ? partes[partes.length - 1][0] : '';
    return (primeira + ultima).toUpperCase();
  }
}
