const scores = [10, 20, 30, 5, 15, 25, 1, 2, 3];
const passed = scores.filter(score => score >= 15);
console.log(passed.join(', '));