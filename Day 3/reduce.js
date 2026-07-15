const bill = [10, 20, 30, 5, 15, 25, 1, 2, 3];
const total  = bill.reduce((sum, item) => sum + item, 0);
console.log(total);