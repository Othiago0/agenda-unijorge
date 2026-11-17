import { MascaraEmailPipe } from './mascara-email-pipe';

describe('MascaraEmailPipe', () => {
  const pipe = new MascaraEmailPipe();

  it('mostra 2 letras, esconde o resto e mantém o domínio', () => {
    expect(pipe.transform('joaosilva1@gmail.com')).toBe('jo********@gmail.com');
  });

  it('usuário curto é todo escondido', () => {
    expect(pipe.transform('ab@x.com')).toBe('**@x.com');
  });

  it('sem arroba não mostra nada', () => {
    expect(pipe.transform('semarroba')).toBe('');
  });

  it('vazio e null', () => {
    expect(pipe.transform('')).toBe('');
    expect(pipe.transform(null)).toBe('');
  });
});
