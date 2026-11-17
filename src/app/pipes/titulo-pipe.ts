import { Pipe, PipeTransform } from '@angular/core';

const LIGACAO = new Set(['de', 'da', 'do', 'das', 'dos', 'e', 'a', 'o', 'as', 'os', 'ao', 'aos']);

@Pipe({ name: 'titulo' })
export class TituloPipe implements PipeTransform {
  transform(valor: string | null | undefined): string {
    if (!valor) return '';
    const palavras = valor.trim().split(/\s+/);
    if (palavras.length === 1 && palavras[0] === '') return ''; // só espaços
    return palavras
      .map((p, i) => {
        const minuscula = p.toLowerCase();
        if (i > 0 && LIGACAO.has(minuscula)) return minuscula; // ligação fica minúscula, menos a primeira
        return minuscula.charAt(0).toUpperCase() + minuscula.slice(1);
      })
      .join(' ');
  }
}
