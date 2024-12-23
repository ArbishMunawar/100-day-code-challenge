

//Array Methods

//unshif
const data=[1,2,3,4,5,6,7]
const unshift=function(){
  let index=0;
  let newvalue="unshift";
  for(let i=data.length-1;i>=0;i--){
  //  console.log("UNSHIFTED",data[i]);
   if(i>=index){
    data[i+1]=data[i]
    if(i==index){
      data[i]=newvalue;
    }
   }
  }
  console.log("Unshift function",data);
}
unshift()

//
const unshiftElement1 = function (arr, element) {
  const newArray = [];
  for (let i = 0; i < arr.length + 1; i++) {
    if (i === 0) {
      newArray[i] = element;
      continue;
    }
    newArray[i] = arr[i - 1];
  }
  return newArray;
};
const unshiftelement1=unshiftElement1(data,"unshift")
console.log("unshifted ",unshiftelement1);


// //hof unshift


const unshiftfunction=function(arr, callback,element){
  return callback(arr,element);
}

  const unShiftElement = function (arr, element) {
    const newArray = [];
    for (let i = 0; i < arr.length + 1; i++) {
      if (i === 0) {
        newArray[i] = element;
        continue;
      }
      newArray[i] = arr[i - 1];
    }
    return newArray;
  };
const unshiftvalue=unshiftfunction(data,unShiftElement,"unshift")
console.log("unshifted ",unshiftvalue);




//  Push

const data3=[1,2,3,4,5,6,7];
const pushElement = function (arr, element) {
  const newArray = [];
for(let i=0; i<=arr.length; i++){  
   newArray[i]=data3[i]
 if(i>=arr.length){
  newArray[i]=element;
 }
}
return newArray;
}
const modifyArray = pushElement(data3, "new value");

console.log(modifyArray);


//hof push

const pushfunction=function(arr, callback,element){
  return callback(arr,element);
}

const pushcallback=function (arr,element){
  const newArray = [];
for(let i=0; i<=arr.length; i++){
  
   newArray[i]=data3[i]
 if(i>=arr.length){
  newArray[i]=element;
 }
}
return newArray;
};
const pushedvalue=pushfunction(data3,pushcallback,"new");
console.log("pushed value",pushedvalue );



//Pop


const data4=[1,2,3,4,5];
const popElement = function (arr) {
  const newArray = [];
for(let i=0; i<arr.length-1; i++){
newArray[i]=arr[i];
}
return newArray;
}
const modifArray = popElement(data4);

console.log(modifArray);

//pop hof


const popfunction = function (arr, callback) {
  return callback(arr);
};

const popcallback=function (arr) {
  const newArray = [];
for(let i=0; i<arr.length-1; i++){
newArray[i]=arr[i];
}
return newArray;
}
const popvalue=popfunction(data4,popcallback);
console.log("Poped ", popvalue);



//shift

const data6=[1,2,3,4,5];

const shiftElement = function (arr) {
  delete arr[0];
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === undefined) continue;
    newArray[i - 1] = arr[i];
  }
  return newArray;
};

console.log("Shifted array", shiftElement(data6));

//shift hof


const shiftfunction = function (arr, callback) {
  return callback(arr);
};

const shiftcallback=function (arr) {
  delete arr[0];
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === undefined) continue;
    // console.log("ELE", i, arr[i]);
    newArray[i - 1] = arr[i];
  }
  return newArray;
};
const shiftvalue=shiftfunction(data6,shiftcallback);
console.log("Shifted value ", shiftvalue);




// Array  Method


//Foreach
const foreach=[1,2,3,4,5,6,7]
const callback=function(value,index,array){
  console.log(value)

}
foreach.forEach(callback)


//factorial
function factorial(num){
  let fact=1;
  for (let index = num; index > 0; index--) {
  
    fact=fact*index;
  }
return fact;
}
console.log("Factorial",factorial(5));

//factorial in for each

const factorial1=function(arr){
let fact=1;
arr.forEach(function(value,index,arr) {
  
  fact=fact*value;
});
return fact;
};

console.log("Factorial",factorial1([1,2,3,4,5,6]));




//Map
const num=[1, 2, 3, 4, 5, 6]
const mapcallback=function(value,index,arr){
  console.log(value,index,arr);
const multiply = value*2;
return multiply;
}
const mappedarray=num.map(mapcallback)
console.log("Maped",mappedarray);



//Filter
const num1=[1, 2, 3, 4, 5, 6]
const filterarray=function(value,index,arr){
console.log(value,index,arr);
  const add=value+2;
  return add;
}
const filterd=num1.filter(filterarray)
console.log("filtered",filterd);


//

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filterCallback = function (value, index, arr) {
  console.log("CALLED", value);
  const odd = index*2;
  return odd;
};
const filteredArray = numbers.filter(filterCallback);
console.log("filteredArray", filteredArray);

