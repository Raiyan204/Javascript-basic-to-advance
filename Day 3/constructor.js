function person(name, age) {
    this.name = name;
    this.age = age;
}
const alice = new person("Alice", 30);
console.log(alice.name, alice.age);
alice.address = "123 Main St";
console.log(alice.address);