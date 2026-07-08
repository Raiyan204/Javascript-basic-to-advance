let items = ['a','b', 5, 3,'a','a'];
let mostFrequent = 0;

let indexOfMostFrequent;
for (let i = 0; i < items.length; i++) {
    let frequency = 0;
    for (let j = 0; j < items.length; j++) {
        if (items[i] === items[j]) {
            frequency++;
        }

    }
    if (frequency > mostFrequent) {
        mostFrequent = frequency;
        indexOfMostFrequent = i ;
    }
}

console.log(items[indexOfMostFrequent] + "  appears " + mostFrequent + " times");