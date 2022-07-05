const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  describe('Testes da função handlerElephants', () => {
    it('se a funcao handlerElephants esta definida', () => {
      expect(handlerElephants).toBeDefined();
    });
    it('se a funcao handlerElephants chamada sem parametros retorna undefined', () => {
      expect(handlerElephants()).toBe(undefined);
    });
    it('se a funcao handlerElephants chamada com um parametro diferente de string retorna "Parâmetro inválido, é necessário uma string"', () => {
      const erro = 'Parâmetro inválido, é necessário uma string';
      expect(handlerElephants(['teste'])).toBe(erro);
      expect(handlerElephants({})).toBe(erro);
      expect(handlerElephants(2)).toBe(erro);
    });
    it('se a funcao handlerElephants quando chamada com os parametros diretos retorna:', () => {
      expect(handlerElephants('popularity')).toBe(5);
      expect(handlerElephants('name')).toBe('elephants');
      expect(handlerElephants('location')).toBe('NW');
      expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
      expect(handlerElephants('residents')).toEqual([
        {
          name: 'Ilana',
          sex: 'female',
          age: 11,
        },
        {
          name: 'Orval',
          sex: 'male',
          age: 15,
        },
        {
          name: 'Bea',
          sex: 'female',
          age: 12,
        },
        {
          name: 'Jefferson',
          sex: 'male',
          age: 4,
        },
      ]);
    });
    it('se a funcao handlerElephants quando chamada com os parametros indiretos retorna:', () => {
      expect(handlerElephants('count')).toBe(4);
      expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
      expect(handlerElephants('averageAge')).toBe(10.5);
      expect(handlerElephants('average')).toBe(null);
    });
  });
});
