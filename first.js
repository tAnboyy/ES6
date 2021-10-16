//let
function greetPerson(name) {
    let greet;
    // let greet;
    if (name === "tan") {
        greet = "Hi tan";
    } else {
        greet = "Hello";
    }
    console.log(greet);
    // let greet;
}

greetPerson("tan");

//const VS let
let num1;
// const num2;
const num2 = 10;
// const num2 = 20;
// num2 = 20;
console.log(num2);
const obj1 = {
    name: "Tan"
}
obj1.age = 19;
// obj1 = {
//
// }

console.log(obj1);

const PI = 3.14;
let r = 3;
let area = PI * r * r;

//functions-
//a
function sal(x, y, z) {
    return x * y + 10;
}

sal(6, 7, 8);
//b
const sal2 = function (x, y, z) {
    return x * y + 10;
};
sal2(4, 5, 6)
//c
const sal3 = (x, y, z) => x * y + z;
sal3(2, 3, 4)

const sal4 = x => x;
sal4(9);
const sal5 = () => {
    return 99;
}
sal5();

//11
let employee = {
    id: 1,
    greet: function (that) {
        // const self = this;
        // setTimeout(function(){console.log(self.id)}, 1000);
        setTimeout(() => console.log(this.id), 1000);
    }
}
employee.greet();

//12
let percentBonus = () => 0.1;
let getValue = function (value = 10, bonus = value * percentBonus()) {
    console.log(value + bonus);
    console.log(arguments.length);
}
getValue();
getValue(20);
getValue(20, 30);
getValue(undefined, 30);

//13
let displayColors = function (message, ...colors) {
    console.log(message);
    console.log(colors);
    console.log(arguments.length);
    // for(let i in arguments){
    //     console.log(arguments[i]);
    // }
    for (let i in colors) {
        console.log(colors[i]);
    }
}

let message = "List of colors- ";
displayColors(message, 'Red');
displayColors(message, 'Red', 'Blue');
displayColors(message, 'Red', 'Blue', 'Green');

//14
let displayColors2 = function (message, ...colors) {
    console.log(message);

    for (let i in colors) {
        console.log(colors[i]);
    }
}

let colorArray = ['Orange', 'Yellow', 'Indigo'];
displayColors2(message, ...colorArray);

//15
let firstName = "Thanmay"
let lastName = "Das"
let es6obj = {
    firstName, //firstName: firstName.. ie property, value same
    lastName
}
console.log(es6obj.firstName)
console.log(es6obj.lastName)

function createPerson(firstName, lastName, age) {
    let fullName = firstName + " " + lastName;
    return {
        firstName,
        lastName,
        fullName,
        // isSenior: function(){}.. before es6
        isSenior() {
            return age > 65;
        }
    }
}

let p = createPerson("Matt", "Hardy", 69);
console.log(p.firstName);
console.log(p.lastName);
console.log(p.fullName);
console.log(p.isSenior());

//16
let variable = "last name";
let obj2 = {
    "first name": "Thanmay", //space in property name, accessible using [], not using .
    [variable]: "M Das" //variable as property name
}

console.log(obj2);
console.log(obj2["first name"]);
console.log(obj2["last name"]);

//17
let employee1 = ["Tan", "Boy", "Male"];
// let employee1 = ["Tan", "Boy"];

// let [fname, lname, gender = "Male"] = employee1;
// let [, , gender] = employee1;
let [fname, ...rest] = employee1;

// console.log(fname);
// console.log(lname);
// console.log(gender);
console.log(rest);

//18
let employee2 = {
    fname1: "Tan",
    lname1: "Boy",
    gender1: "Female"
}
//{}, alias
let {fname1: f, lname1: l, gender1: g} = employee2;
// console.log(fname1);
console.log(f);
// console.log(lname1);
console.log(l);
// console.log(gender1);
console.log(g);

//19
let user = "Thanmay";
// let greet = "Welcome " + user;
let greet = `Welcome 'hi' "hello" 
           ${user}
              multi-line w/o any + operators`;

console.log(greet);

//20
let colors = ['green', 'red', 'blue'];
for(let index in colors){
    console.log(colors[index]);
}

for(let color of colors){
    console.log(color);
}

let str = "TAN";
for(let char of str){
    console.log(char);
}

//22
class Person {
    constructor(name) {
    this.name = name;
    console.log(this.name);
    }

    static myName() {
        console.log(`static method doesnt get access to this.name?`);
    }

    alwaysName() {
        console.log(`prototype method gets access to ${this.name}`);
    }
}

let p3 = new Person('Tan');
console.log(p3.name);
Person.myName();
p3.alwaysName();