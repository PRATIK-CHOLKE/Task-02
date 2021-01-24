const numbers = [3, 23, 54, 24, 67, 34, 78];
// SLICE method
console.log(numbers.slice(1, 5));
console.log(numbers.slice(-3));
console.log(numbers.slice(2));

const compitition = [
    {
        name: "Ram", 
        rank: 1
    },
    {
        name: "Rohit", 
        rank: 2
    },
    {
        name: "Shri", 
        rank: 3
    },
    {
        name: "Shrey",
        rank: 4
    }
];
// Get info about First three toppers of compition
const rankers = compitition.slice(0, 3)
console.log(rankers)

// SPLICE Method - Changes the orignal array.
console.log(numbers.splice(3, 6)); // deleting elements from index 3 to 6

// Sort Method.
const names = ['Pratik', 'Altaf', 'Parvej', 'Dushyant', 'Subodh'];
console.log(names.sort());
let numb = [13, 10, 23, 5, 4, 21, 15, 100];  // sort method takes numbers as strings
console.log(numb.sort());

console.log(numb.sort( (a, b) => a-b ) )    // Procedure to sort the numbers

const products = [
    {
        name: "Lenovo",
        price: 42000,
        count: 10
    },
    {
        name: "Dell",
        price: 45000,
        count: 5
    },
    {
        name: "HP",
        price: 50000,
        count: 0
    },
    {
        name: "Acer",
        price: 32000,
        count: 8
    }
];
console.log( products.sort((a, b) => a.price - b.price)); // sorting products based on price

// PUSH method
const n = numbers.push(12, 32)
console.log(`Array: [${numbers}] Length: ${n}`);

// POP method
const nub = [2, 4, 3, 5, 54, 65, 78]
console.log(`Array: ${nub} Poped element: ${nub.pop()}`);

// UNSHIFT Method
const un = numbers.unshift(-11, 2.5);
console.log(numbers);

// SHIFT Method
numbers.shift()
console.log(numbers)