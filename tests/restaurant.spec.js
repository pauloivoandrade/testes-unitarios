const createMenu = require('../src/restaurant');
 
describe('10 - Implemente a função `createMenu`, bem como seus casos de teste', () => {
  it('Verifica se a função `createMenu` tem o comportamento esperado', () => {
    expect(() => createMenu()).toThrowError();
  });  
  it('A função createMenu() retorna um objeto que possui a chave fetchMenu', () => {
    expect(createMenu({ food: {}, drinks: {} })).toHaveProperty('fetchMenu');
  })
  it('Verifica se o valor da chave fetchMenu do objeto retornado pela função createMenu() é uma função', () => {
    expect(typeof createMenu({ food: {}, drinks: {} }).fetchMenu).toBe('function');
  })
  it('Verifica se o objeto retornado pela função createMenu({ food: {}, drinks: {} }).fetchMenu() retorna um objeto cujas chaves são somente food e drinks', () => {
    const menu = createMenu({ food: {}, drinks: {} }).fetchMenu();
    expect(menu).toEqual({ food: {}, drinks: {} });
  });  
  it('Verifica se o menu passado para a função createMenu() é idêntico ao menu recuperado pela função createMenu({ food: {}, drinks: {} }).fetchMenu()', () => {
    const menuData = { food: {}, drinks: {} };
    const menu = createMenu(menuData);
    expect(menu.fetchMenu()).toEqual(menuData);
  });  
});
 