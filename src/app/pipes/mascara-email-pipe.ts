import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'mascaraEmail' })
export class MascaraEmailPipe implements PipeTransform {
  transform(valor: string | null | undefined): string {
    if (!valor) return '';
    const arroba = valor.lastIndexOf('@');
    if (arroba <= 0) return ''; // não parece e-mail: não mostra nada
    const usuario = valor.slice(0, arroba);
    const dominio = valor.slice(arroba); // já com a @
    if (usuario.length <= 2) return '*'.repeat(usuario.length) + dominio; // curto demais: esconde tudo
    return usuario.slice(0, 2) + '*'.repeat(usuario.length - 2) + dominio;
  }
}
