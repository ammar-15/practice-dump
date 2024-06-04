const person = [];
person[0] = "John";
person[1] = "Doe";
person[2] = 46;
person.length;    // Will return 3
person[0];        // Will return "John"
person.push("lemon"); //Will add "lemon"


const points = new Array(4); //array of 4 elements
points[0] = "john";
points[1] = "john";
points[2] = "john";
points[3] = "john";
points[4] = "john";  //adds one more element


console.log(person);
console.log(points);


//nested arrays and objects

const myObj = [
    "John",
    30,
    [
      ["Ford", ["Fiesta", "Focus", "Mustang"]],
      ["BMW", ["320", "X3", "X5"]],
      ["Fiat", ["500", "Panda"]]
    ]
]

console.log(myObj[2][0][0],myObj[2][0][1][2]); //prints "Ford Mustang"




