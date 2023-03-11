

let add: (a:number, b:number) => string | number;
add = function(a:number, b:number){
        return a + b;
}

function multiply(a:number,b:number,c?:number):number{
    return a*b*c;
}

multiply(2,3,4);
multiply(5,6);

//default parameter{}
function applyDiscount(price:number, discount:number = 0.5) {

}
// we cannot have default parameter in function type definition, however we can have the optional one in function type definition

applyDiscount(1000,1);


//function overloading - It will be different from c, c-sharp or java

function overloaded_add(a:number, b:number):number;
function overloaded_add(a:string,b:string):string;

/*function overloaded_add(a: any, b:any):any{
    return a+b;
}
*/

function overloaded_add(a:number | string,b:number | string) : number | string | void {
    if (typeof a === 'number' && typeof b === 'number'){
        return a+b;
    }
    else if(typeof a === 'string' && typeof b ==='string' ){
        return a.concat(b);
    }
}

function sum(a:number,b:number):number;
function sum(a:number,b:number,c:number):number;
function sum(a:number,b:number,c?:number):number{
    if(c){
        return a+b+c;
    }
    else{
        return a+b;
    }
}

sum(1,2,3);

//method overloading
class MyClass{
    add(a:number,b:number):number;
    add(a:string,b:string):string;
    add(a:any,b:any):any{
        return a+b;
    }
}

const myClass = new MyClass();
console.log(myClass.add(1,2));
console.log(myClass.add("Hello there \n ","Alok Rahul"));

export{};