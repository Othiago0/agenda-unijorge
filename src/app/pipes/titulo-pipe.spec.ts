import { TituloPipe } from './titulo-pipe';

describe('TituloPipe', () => {
  const pipe = new TituloPipe();

  it('minúsculas com ligação', () => {
    expect(pipe.transform('semana de tecnologia da unijorge')).toBe('Semana de Tecnologia da Unijorge');
  });

  it('tudo maiúsculo', () => {
    expect(pipe.transform('DE VOLTA AO CAMPUS')).toBe('De Volta ao Campus');
  });

  it('ligação na primeira palavra fica maiúscula', () => {
    expect(pipe.transform('de volta')).toBe('De Volta');
  });

  it('só espaços', () => {
    expect(pipe.transform('   ')).toBe('');
  });

  it('vazio e null', () => {
    expect(pipe.transform('')).toBe('');
    expect(pipe.transform(null)).toBe('');
  });
});
