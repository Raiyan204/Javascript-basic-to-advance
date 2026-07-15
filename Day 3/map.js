const prices = [10, 20, 30, 5, 15, 25, 1, 2, 3];
const withVat = prices.map(price => price * 1.5);
console.log(withVat.join(', '));