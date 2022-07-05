const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  const zooHours = {
    Tuesday: { open: 8, close: 6 },
    Wednesday: { open: 8, close: 6 },
    Thursday: { open: 10, close: 8 },
    Friday: { open: 10, close: 8 },
    Saturday: { open: 8, close: 10 },
    Sunday: { open: 8, close: 8 },
    Monday: { open: 0, close: 0 },
  };
  it('testa se chamando sem argumentos retorna todas as horas', () => {
    expect(getOpeningHours()).toEqual(zooHours);
  });
  it('testa se chamando com um dia nao pertencente a semana lanca erro', () => {
    expect(() => getOpeningHours('mosday', '12:00-AM')).toThrow('The day must be valid. Example: Monday');
  });
  it('testa se chamando com uma hora invalida (nao numerica) lanca erro', () => {
    expect(() => getOpeningHours('monday', '1a:00-AM')).toThrow('The hour should represent a number');
  });
  it('testa se chamando com um minuto não numerico lanca erro', () => {
    expect(() => getOpeningHours('monday', '12:0a-AM')).toThrow('The minutes should represent a number');
  });
  it('testa se chamando com um turno nao existente lanca erro', () => {
    expect(() => getOpeningHours('monday', '12:00-zM')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
  it('testa se chamando com hora nao existente lanca erro', () => {
    expect(() => getOpeningHours('monday', '16:00-AM')).toThrow('The hour must be between 0 and 12');
  });
  it('testa se chamando com minuto nao existente lanca erro', () => {
    expect(() => getOpeningHours('monday', '12:80-AM')).toThrow('The minutes must be between 0 and 59');
  });
  it('testa se chamando com monday retorna "zoo is closed"', () => {
    expect(getOpeningHours('monday', '12:00-AM')).toBe('The zoo is closed');
  });
  it('testa se chamando com Sunday 09:00-AM retorna "The zoo is open"', () => {
    expect(getOpeningHours('Sunday', '09:00-AM')).toBe('The zoo is open');
  });
  it('testa se chamando com Sunday 09:00-PM retorna "The zoo is closed"', () => {
    expect(getOpeningHours('Sunday', '09:00-PM')).toBe('The zoo is closed');
  });
});
