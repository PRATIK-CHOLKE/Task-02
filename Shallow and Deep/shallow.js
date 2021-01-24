// ARRAYS

let random1 = [123, 'Shiv', true, 'Shirdi'];

console.log(`Original Array: [${random1}]`);
// Both arrays get changed
let random2 = random1;
random1[0] = 456;
//console.log(random1, random2);

// Solution
let random3 = Array.from(random1)
random1[0] = 789;
//console.log(random1, random3);

let random4 = [...random1]
random1[2] = false;
//console.log(random1, random4);

let random5 = [].concat(random1);
random1[2] = true;
//console.log(random1, random5);

// OBJECTS
let object1 = {
    id: 01,
    name: "Pratik",
    dreamJob: "DRDO",
    isActive: true
};

// Changes Both the object.
let object2 = object1;
object1.id = 02
//console.log(object2, object1);

// Solution.

let object3 = {...object1};
object1.isActive = false;
// console.log(object3, object1);

let object4 = JSON.parse(JSON.stringify(object1));
object1.name = "SHIV"
console.log(object4, object1);
