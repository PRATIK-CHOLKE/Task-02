const numbers = [10, 20, 30, 40, 50];
 
const numbersDouble = numbers.map( value => value*2 );

// Original  array remains unchanged
console.log(numbers);
// Modified array with each element mutliplied by two.
console.log(numbersDouble);

const numberMultiplyWithIndex = numbers.map( (index, value) => index*value);
console.log(numberMultiplyWithIndex);



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

// Application- Checking the availability of product in store
products.map((value) =>{
    if( value.count === 0)
        console.log(`Sorry..!! ${value.name} is not available`)
    else 
        console.log(`Available product: ${value.name}. In stock: ${value.count}`)
});