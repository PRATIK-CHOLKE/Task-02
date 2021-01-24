let dummyObj = {
    id: 345,
    employee: ['AB', 'CD', 'EF', 'GH'],
    data: [
    {
        name: 'AB',
        address: 'Shirdi'
    },
    {
        name: 'CD',
        address: 'Pune'
    },
    {
        name: 'AB',
        address: 'Nashik'
    }
    ],
    company: 'Google'
};

// Changed Both
let object1 = dummyObj;
dummyObj.company = "Microsoft";
dummyObj.data[0].name = "Shiv";
//console.log(dummyObj, object1);

// Solution - using JSON.parse
let object2 = JSON.parse(JSON.stringify(dummyObj));
dummyObj.id = 123;
dummyObj.employee[0] = "Pratik"
console.log(dummyObj, object2);