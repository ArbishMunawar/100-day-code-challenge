
// const eventListner=function(){
// element.style.color="red"
    
    // const main=document.getElementById("main");
// }

// button.addEventListener("click",eventListner)







//we have two types of how we can apply event listners

//1- with function

// const eventListner=function(){
//   element.style.color="red"
// }
//   button.addEventListener("click",eventListner)


//2-without function

// const element=document.getElementById("element");
  
//   const button=document.getElementById("button");
//   button.addEventListener("click",function(event)
//   {
//        main.style.backgroundColor="lightgray" ;  
//        button.style.backgroundColor="gray" ;   
//        button.style.color="white" ;   
//       //  element.style.color="red"
//        if ( element.style.color==="red") {
//          element.style.color="blue"
//        } else {
//          element.style.color="red"
//        }
//   })


const hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
console.log(hex);

const randomColor=function(){
    // return hex[Math.floor(Math.random() * 16)];
    return Math.floor(Math.random() * 16);
}
const picker = document.getElementById("picker");
const button=document.getElementById("button")
const main=document.getElementById("main")

button.addEventListener("click",function(){
let hexValue="#";
for(let i=0;i<6;i++){
hexValue += hex[randomColor()];
};
// button.style.backgroundColor=hexValue;

main.style.backgroundColor=hexValue;
picker.innerText = hexValue;

});



//
console.log(0.99335434 * 10);
console.log(Math.floor(-2.1234 * 10));      ///round off the closet small value 
console.log(Math.ceil(0.564 * 7));          ///round off the closet large value 
console.log(Math.round(0.93 * 10));           //rounf off according to value


//Attributes

const newbutton=document.querySelector("#new-button")
newbutton.innerText="Naya text.."
console.log(newbutton.getAttribute("id"));
newbutton.setAttribute("name", "new-button-name");
// newbutton.setAttribute("name", "new-button-name");