
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



///remove on click


// const allchildern=document.querySelector("body").children;
// for(let i=0;i<allchildern.length;i++){
//   allchildern[i].addEventListener("click",function(){
//     allchildern[i].remove();
//   })
// }

//Add on click

const add=document.getElementById("add");
add.addEventListener("click",function(){
const newelement=document.createElement("h1")
newelement.textContent ="added on click"
document.body.appendChild(newelement);

})




// DOM (Document Object Model)

// const DOM = {
//   html: {
//     head: { title: "My document" },
//     body: {
//       section: {
//         h2: "Hero section",
//         p: "Paragraph of the hero section",
//       },
//     },
//   },
// };


console.log(window);
console.log(window.document);
console.log(window.document.head);
console.log(document.head);
console.log(document.body);
console.log(document.head.title.textContent);
console.log(document.head.title.innerText);
console.log(document.head.title.innerHTML);
console.log(document.body.h1);

// Getting elements

const elements = document.getElementsByTagName("h1");

console.log(elements[0].innerText);
console.log(elements[1].textContent);
console.log(elements[2].innerHTML);

elements[0].innerText = "Inner text...";

const firstElement = document.getElementById("title");
firstElement.innerText = "First Element by Title Here...";
console.log(firstElement);

const moreElements = document.getElementsByName("heading");
console.log(moreElements);

// const moreQueryElements = document.querySelector("title"); // tag name
const moreQueryElements = document.querySelector("#title"); // id
// const moreQueryElements = document.querySelector(".title"); // class
// document.querySelectorAll("")
console.log(moreQueryElements,"By query selector");

// Practice
const classElements = document.getElementsByClassName("content");
const moreClassElements = document.querySelectorAll(".content");
const moreElementsWithQuery = document.querySelectorAll("#text");

console.log({ classElements, moreClassElements, moreElementsWithQuery });

const singleElementWithQuery = document.querySelector(".content");
const singleIdElementWithQuery = document.querySelector("#text");
console.log({ singleElementWithQuery, singleIdElementWithQuery });
singleElementWithQuery.innerText = "Some text here...";

// Multiple elements
// // Getting and setting text
moreElementsWithQuery.innerText = "text here...";
moreElementsWithQuery[0].innerText = "Some inner text here...";
moreElementsWithQuery[1].innerText = "Some inner text here...";
moreElementsWithQuery[2].innerText = "Some inner text here...";

moreClassElements.forEach(function (element) {
  element.innerText = "Passing text to multiple elements using For each...";
});

// Style
singleElementWithQuery.style.color = "red";
singleElementWithQuery.style.backgroundColor = "green";
singleElementWithQuery.style.padding = "20px";
singleElementWithQuery.style.border = "20px";
singleElementWithQuery.style.borderStyle = "solid";
singleElementWithQuery.style.borderLeftColor = "orange";

console.log({ style: singleElementWithQuery.style });

// Event listeners

const buttonClickListener = function () {
  console.log("Clicked");
//   console.log("buttonClickListener");
};

// Button here

const button = document.getElementById("button");
button.addEventListener("click", function (event) {
  console.log(event, "Clicked...");
});




//Attributes

// const newbutton=document.querySelector("#newbutton")
// newbutton.innerText="Naya text.."
// console.log(newbutton.getAttribute("id"));
