const students = [
    { name: 'Alice', score: 85 },
    { name: 'Bob', score: 92 },
    { name: 'Charlie', score: 78 },
    { name: 'David', score: 95 },
    { name: 'Eve', score: 88 }
];
const topper = students.find((s) => s.score === Math.max(...students.map((s) => s.score)));
console.log(topper.name);