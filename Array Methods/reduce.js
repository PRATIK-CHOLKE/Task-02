const numbers = [12, 14, 16, 50, 20, 22];

// getting sum of array.
const total = numbers.reduce( (value, sum) =>  sum + value, 0) //Giving 0 is optional
console.log("Sum is: "+total)

// getting maximum of an array
const max = numbers.reduce( (value, temp) => {
    if (value > temp)
        return value;
    return temp
}, -Infinity);
console.log("Maximum is: "+ max)

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

// Return find total expenditure by store owner.
const totalExpenditure = products.reduce( (temp, product) => temp + product.price * product.count, 0)

console.log(`Total Expenditure is: ${totalExpenditure}`)