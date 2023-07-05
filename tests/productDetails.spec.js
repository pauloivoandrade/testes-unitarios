const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [ 
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
      expect(typeof productDetails).toBe('function');
    });
  it('Teste se o retorno da função é um array', () => {
    expect(productDetails('Alcool gel', 'Máscara')).toBeInstanceOf(Array);
  })
  it('Teste se o array retornado pela função contém dois itens dentro', () => {
    expect(productDetails('Alcool gel', 'Máscara').length).toBe(2);
  })
  it('Teste se os dois itens dentro do array retornado pela função são objetos', () => {
    expect(productDetails('Alcool gel', 'Máscara')).toBeInstanceOf(Object);
  })
  it('Verifica se objetos são diferentes para parâmetros diferentes', () => {
    const products = productDetails('Alcool gel', 'Máscara');
  
    expect(products[0].name).not.toBe(products[1].name);
    expect(products[0].details.productId).not.toBe(products[1].details.productId);
  });
  it('Teste se os dois productIds terminam com 123', () => {
    const products = productDetails('Alcool gel', 'Máscara');
    expect(products[0].details.productId).toMatch(/123$/);
    expect(products[1].details.productId).toMatch(/123$/);
  })
  });

