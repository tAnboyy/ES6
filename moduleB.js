export var greet = 'Hi tanboy';
console.log('moduleB..');  //to show module imports get hoisted

//export default greet;

export var obj = {
    fname: 'T',
    lname: 'Das'
}

export function hey(message) {
    console.log(message);
}

export class GreetMessage{
    constructor() {
        console.log("Constructor");
    }
    greet(){
        console.log("Greet function");
    }
}