const number = [10, 25, 30, 45, 50, 65]

// Fetching even nos from number array
const even = number.filter( value => value % 2 === 0);
console.log(even);

const nums = [2, 4, 6, 8, 2, 4, 5, 10, 6];

// filtering duplicates
const num = nums.filter( (value, index, arr) => arr.indexOf(value) === index );
console.log(num)

let data = [
    {
        name: "Shiv",
        age: 21
    },
    {
        name: "Shivam",
        age: 18
    },
    {
        name: "Pratik",
        age: 15
    },
    {
        name: "Prakash",
        age: 17
    }
];

const permit = data.filter( (user) => {
    if (user.age >= 18)
        console.log(`Hey ${user.name.toUpperCase()} Please apply for voter ID`);
    else
        console.log(`Sorry ${user.name.toUpperCase()} you need to wait for ${18 - user.age} year more..`);
})