import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'resumo' })
export class ResumoPipe implements PipeTransform {
  transform(valor: string | null | undefined, limite: number = 30): string {
    if (!valor) return '';
    if (valor.length <= limite) return valor; // cabe inteiro: não corta

    let corte = valor.slice(0, limite);
    const proximo = valor.charAt(limite);
    if (proximo !== ' ') {
      // o corte caiu no meio de uma palavra: volta até o último espaço
      const ultimoEspaco = corte.lastIndexOf(' ');
      if (ultimoEspaco > 0) corte = corte.slice(0, ultimoEspaco);
    }
    return corte.trim() + '…';
  }
}
