"use strict";
exports.__esModule = true;
var add;
add = function (a, b) {
    return a + b;
};
function multiply(a, b, c) {
    return a * b * c;
}
multiply(2, 3, 4);
multiply(5, 6);
//default parameter{}
function applyDiscount(price, discount) {
    if (discount === void 0) { discount = 0.5; }
}
// we cannot have default parameter in function type definition, however we can have the optional one in function type definition
applyDiscount(1000, 1);
/*function overloaded_add(a: any, b:any):any{
    return a+b;
}
*/
function overloaded_add(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    else if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
}
function sum(a, b, c) {
    if (c) {
        return a + b + c;
    }
    else {
        return a + b;
    }
}
sum(1, 2, 3);
//method overloading
var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    MyClass.prototype.add = function (a, b) {
        return a + b;
    };
    return MyClass;
}());
var myClass = new MyClass();
console.log(myClass.add(1, 2));
console.log(myClass.add("Hello there \n ", "Alok Rahul"));
