let my_name:string = "Sudha";
let age:number = 30;

let active:boolean = true;

//array type
let arr:number[] = [1,2,3,4];

//object type
let person: {
    name:string,
    age:number
}

person = {name:"Alok", age:21};

//function type 
//let greeting = (name:string):string;

let greeting1 : (name1:string) => string | number;

greeting1 = function(name1:string){
    return 5;
}

//union type
let result: number | boolean | string;

function add (a:number | string, b:number | string) : number | string | undefined{
    if(typeof a === 'number'  && typeof b ==='number'){
        return a + b ;
    }
  else  if(typeof a === 'string'  && typeof b ==='string'){
        return a.concat(b);
    }
}


var x:any = 5; // any means we are opting out of typechecking
x = "5";

console.log(add(5,3));

//never
function raiseError(message:string):never{
    throw new Error(message);
}

function validation(){
 // some validation code
    raiseError("not valid");
}

type chars = string; // this is type aliases, where chars will be able to store the string type

let message1:chars;
let z:chars;


export{};
