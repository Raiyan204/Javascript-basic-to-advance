const fruits = {
    apple: 10,
    banana: 20,
    orange: 30
}
let text = "";
for (const [key,value] of Object.entries(fruits)) {
    text += `${key}: ${value}\n`;
}
console.log(text);
const person = {
  name: "John",
  age: 30,
  city: "New York"
};
let personText = JSON.stringify(person);
console.log(personText);