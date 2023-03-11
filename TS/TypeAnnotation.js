"use strict";
exports.__esModule = true;
var my_name = "Sudha";
var age = 30;
var active = true;
//array type
var arr = [1, 2, 3, 4];
//object type
var person;
person = { name: "Alok", age: 21 };
//function type 
//let greeting = (name:string):string;
var greeting1;
greeting1 = function (name1) {
    return 5;
};
//union type
var result;
function add(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    else if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
}
var x = 5; // any means we are opting out of typechecking
x = "5";
console.log(add(5, 3));
//never
function raiseError(message) {
    throw new Error(message);
}
function validation() {
    // some validation code
    raiseError("not valid");
}
var message1;
var z;
