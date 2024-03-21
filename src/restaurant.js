/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable max-len */
// Siga as orientações do README!

const createMenu = (menuData) => {
    if (!menuData) {
      throw new Error('Menu não fornecido');
    }
  
    const fetchMenu = () => menuData;
  
    const consumption = [];
  
    const order = (item) => {
      const { food, drinks } = fetchMenu();
      const isFoodAvailable = Object.hasOwnProperty.call(food, item);
      const isDrinkAvailable = Object.hasOwnProperty.call(drinks, item);
      switch (item) {
        case 1:
            isFoodAvailable(consumption.push(item));    
            break;
        case 2:
            isDrinkAvailable(consumption.push(item));
            break;
            default:
                return 'Item indisponível';
      }
      };
    
    const calculateTotalPrice = (menu) =>
      consumption.reduce((total, item) => {
        const price = menu[item] || 0;
        return total + price;
      }, 0);
  
    const pay = () => {
      const { food, drinks } = fetchMenu();
      const totalPrice = calculateTotalPrice(food) + calculateTotalPrice(drinks);
      return totalPrice * 1.1;
    };
  
    return {
      fetchMenu,
      consumption,
      order,
      pay,
    };
    };
  console.log(createMenu({ food: {}, drinks: {} }));
  
module.exports = createMenu;

// const createStudent = (name) => {
//     const estudante = {};
//     const frase = 'Eita pessoa boa!';
//     estudante.name = name;
//     estudante.feedback = () => frase;
//     return estudante;
//     };