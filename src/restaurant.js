/* eslint-disable max-len */
// Siga as orientações do README!

const createMenu = (menuData) => {
    if (!menuData) {
      throw new Error('Menu não fornecido');
    }
  
    const menu = {
      fetchMenu: () => menuData,
      consumption: [],
      order(item) {
        const { food, drinks } = this.fetchMenu();
        if (Object.prototype.hasOwnProperty.call(food, item) || Object.prototype.hasOwnProperty.call(drinks, item)) {
          this.consumption.push(item);
        } else {
          return 'Item indisponível';
        }
      },
      pay() {
        const { food, drinks } = this.fetchMenu();
        const totalPrice = this.consumption.reduce((total, item) => {
          const price = food[item] || drinks[item] || 0;
          return total + price;
        }, 0);
        return totalPrice * 1.1;
      },
    };
  
    return menu;
  };
module.exports = createMenu;

// const createStudent = (name) => {
//     const estudante = {};
//     const frase = 'Eita pessoa boa!';
//     estudante.name = name;
//     estudante.feedback = () => frase;
//     return estudante;
//     };