const person = [];
person[0] = "John";
person[1] = "Doe";
person[2] = 46;
person.length;    // Will return 3
person[0];        // Will return "John"
person.push("lemon");


//const points = [40];

const points = new Array(4);
points[0] = "john";
points[1] = "john";
points[2] = "john";
points[3] = "john";
points[4] = "john";


console.log(person);
console.log(points);


//nested arrays and objects

const myObj = [
    "John",
    30,
    [
      {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
      {name:"BMW", models:["320", "X3", "X5"]},
      {name:"Fiat", models:["500", "Panda"]}
    ]
]

console.log(myObj[2][0][2]);




