
//Loops


//for loop

for (let count = 1; count <=5; count++) {
   console.log("Here we are.......");
     
   }
   
//while loop
   
   let whileloop=1;
   while (whileloop<=4) {
     console.log("We are running while loop......");
     whileloop++;
   }
   
   //do while loop
   let dowhile=5;
   do {
     console.log("WE ARE RUNNING DO WHILE LOOP.....");
     dowhile--;
     
   } while (dowhile>=1);
   
   
   //lets prnt a table using for loop
   
   for (let table = 0; table <=10; table++) {
   console.log(`5*${table}=${table*5}`);
   }
   
   
   //simple Array
   const myArray=[2,"Arbish", NaN ,65];
   console.log(myArray);
   
   
   //loop with array
   const tab_array=[[1,2,3,4,5],["Arbish","Rohish"],[10,20,30]];
   
   for(let index=0;index<tab_array.length;index++)
   {
     const inner=tab_array[index]
     for(let innerIndex=0; innerIndex<inner.length; innerIndex++ )
     {
       console.log("Tab array",`${index} x ${innerIndex}===>${inner[innerIndex]}`);
     }
   }
   
   //other
   
   const simpArray=[[1,2,3,4,5],[11,12,13,14,15],[21,22,23,24,25],[31,32,33,34,35]];
   
   for(let outerIndex=0;outerIndex<simpArray.length;outerIndex++)
   {
     const innerArray=simpArray[outerIndex]
     for(let innerIndex=0;innerIndex<innerArray.length;innerIndex++)
     {
       console.log("Simple array",`${outerIndex} x ${innerIndex}====${innerArray[innerIndex]}`);
       
     }
   }
   

   const numbers = [10, 20, 40, 50, 60];

const avgMidArray=function(arr){
const array= arr.length%2;
if(array==0){
const mid= arr.length/2;
const frstmid=mid;
const secndmid=mid+1;
const avg =(frstmid+secndmid)/2;
console.log("Average of mid=====",avg);

}
else{
return (arr.length-1)/2;

}

}

console.log(avgMidArray(numbers));