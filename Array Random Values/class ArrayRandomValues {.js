class ArrayRandomValues {
  constructor(products) {
    this.products = products;
  }

  getRandomValues() {
    const randomIndexes = generateRandomIndexes(this.products.length);
    const randomValues = randomIndexes.map(index => this.products[index]);
    return randomValues;
  }
}

// Função auxiliar para gerar índices aleatórios
function generateRandomIndexes(length) {
  const indexes = [];
  for (let i = 0; i < length; i++) {
    indexes.push(i);
  }
  return shuffleArray(indexes);
}

// Função auxiliar para embaralhar um array usando o algoritmo Fisher-Yates
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

module.exports = ArrayRandomValues;

const ArrayRandomValues = require('./ArrayRandomValues');

describe('ArrayRandomValues', () => {
  const products = ['A', 'B', 'C', 'D', 'E'];
  const arrayRandomValues = new ArrayRandomValues(products);

  test('getRandomValues returns an array with random values from products', () => {
    const randomValues = arrayRandomValues.getRandomValues();
    expect(randomValues).toHaveLength(products.length);
    expect(randomValues).toEqual(expect.arrayContaining(products));
  });
});

