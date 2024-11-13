// Scopes
// 1- global scope
// 2- local scope / block
// 3- module scope
// 4- script scope
// 5- function scope

 //Global and function scope

//  scope of var are global and function

var myName="Arbish"

function Name() {
   console.log("My name===",myName);
   var age=30;
   console.log("My age==",age);
   
}
Name();
console.log("My name===",myName);//global can be accessed anywhere

//function scope can be accessed out from inside the function
//  console.log("My age out==",age);


//block scope
//const and let has block scope

{
   var username = "Ria";
   let age = 20;
   const contact = 1234567890;
   console.log("BLOCK AGE ==== ", age);
   console.log("BLOCK CONTACT ==== ", contact);
 }
// they cannot be accessed outside the block

//   console.log("out AGE ==== ", age);
//   console.log("out CONTACT ==== ", contact);




// Naming conventions
// 1 - no reserved words
// 2- cannot start with a number
// 3- cannot use hyphens

// Camel case
const numberOne = 7;
const numberTwo = 16;


console.log("SUM ==== ", numberOne + numberTwo);
console.log("DIFFERENCE ==== ", numberOne - numberTwo);
console.log("MUL ==== ", numberOne * numberTwo);
console.log("DIV ==== ", numberOne / numberTwo);
console.log("MOD ==== ", numberOne % numberTwo);
console.log("EXP ==== ", numberOne ** numberTwo);


// comparison operators
// 1- equal (==, ===)
// 2- greater than (>)
// 3- less than (<)

console.log(20 == 20);
console.log(20 == "20");
console.log(20 === "20");

console.log(22 > "21");
console.log(22 >= "21");
console.log(21 >= "21");

// logical operators
// 1 - and
// 2- or
// 3- not (inverter)

console.log("AND Operator  ======== ", true && true);
console.log("AND Operator ======== ", true && false);  //Checks if both are true

console.log("OR Operator ======== ", true || true);
console.log("OR Operator ======== ", true || false);  //checks if any one is true

console.log("NOT Operator ======== ", !!true);         //inverts the value
