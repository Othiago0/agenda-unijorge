import { ResumoPipe } from './resumo-pipe';

describe('ResumoPipe', () => {
  const pipe = new ResumoPipe();
  const texto = 'Semana de Tecnologia da Unijorge com palestras e oficinas';

  it('padrão de 30 caracteres, sem partir palavra', () => {
    expect(pipe.transform(texto)).toBe('Semana de Tecnologia da…');
  });

  it('com limite de 40', () => {
    expect(pipe.transform(texto, 40)).toBe('Semana de Tecnologia da Unijorge com…');
  });

  it('texto curto não é cortado', () => {
    expect(pipe.transform('Oficina de Angular')).toBe('Oficina de Angular');
  });

  it('vazio e null', () => {
    expect(pipe.transform('')).toBe('');
    expect(pipe.transform(null)).toBe('');
  });
});
