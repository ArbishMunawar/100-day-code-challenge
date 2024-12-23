
                    // FUNCTIONS 


// Function declaration
function loggerHere() {
  console.log("Console =======");   //function has identifier
}

// Function expression
const blogger = function () {
  console.log("Console =======");     //function does'nt have identifier but stored in variable
};

//HOF

function calculateBMI(mass, height) {
    return mass / height ** 2;
  }
  console.log("BMI is : ", calculateBMI(80, 1.78));
  
  function compareTwoBMIs(p1BMI, p2BMI) {
    return p1BMI > p2BMI;
  }
  
  if (compareTwoBMIs(calculateBMI(68, 1.8), calculateBMI(85, 1.75))) {
    console.log("P1 has a higher BMI than P2");
  } else {
    console.log("P1 has a less BMI than P2");
  }
  
//  <============== Task 01 goes here  ================>

  function avgOfthreenumbers(num1,num2,num3) {
    return (num1+num2+num3)/3;
}

console.log(avgOfthreenumbers(1,4,7));

//  <============== Task 02 goes here  ================>
function speed(distance,time) {
return distance/time;
}

console.log(speed(150,2));
console.log(speed(100,1.5));

//  <============== Task 03 goes here  ================>
function totalPrice(price1,price2,price3) {
return (price1+price2+price3);
}
const price=totalPrice(25,35,15);
console.log(price);

//  <============== Task 04 goes here  ================>
function averageHeight(height1 ,height2) {
return (height1 + height2)/2;
}
console.log(averageHeight(1.75,1.80));
console.log(averageHeight(1.65,1.70));


//  <============== Task 05 goes here  ================>
function Time(distance,speed) {
return distance/speed;
}
const time=Time(60,120);
console.log(time);

//  <============== Task 06 goes here  ================>
function positiveOrnegavtive(number) {
if(number>0){
    console.log("Number is Positive");  
}else{
    console.log("Number is Negative");  
}
}
positiveOrnegavtive(12);

//  <============== Task 07 goes here  ================>
function evenOrodd(num) {
if(num%2==0){
    console.log("Number is Even");  
}else{
    console.log("Number is Odd");  
}
}
evenOrodd(13);
// console.log(evenOrodd(44));

//  <============== Task 08 goes here  ================>
function BMI(massA,heightA,massB,heightB) {
const BMIA= massA / (heightA ** 2);
const BMIB= massB / (heightB ** 2);

if(BMIA>BMIB){
    return "Person A has higher BMI";
}else if(BMIA<BMIB){
    return "Person B has higher BMI";
} else{
   return "Both has same BMI" ;
}
}
console.log(BMI(68,1.75,85,1.80));
console.log(BMI(72,1.60,72,1.70));

//  <============== Task 09 goes here  ================>
function studentScore(score) {
if(score>=90){
    return "Grade A";
}else if(score>=80 && score<=89 ){
    return "Grade   B";

}else if(score>=70 && score<=79 ){
    return "Grade C";

}else{
    return "Grade D";

}
}
console.log(studentScore(57));

//  <============== Task 10 goes here  ================>
function triangleIsValid( angle1, angle2, angle3) {
const sum= (angle1+ angle2+ angle3);

if(sum==180){
    return "Triangle is valid";
    // console.log("Triangle is valid");
}else{
    return "Triangle is Invalid"
    // console.log("Triangle is Invalid");
}
}
console.log(triangleIsValid(60,60,60));
console.log(triangleIsValid(60,90,75));

