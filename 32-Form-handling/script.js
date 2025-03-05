
const ROOT =document.getElementById("root");
const section=document.createElement("section");
const form=document.createElement("form");

const nameInput=createInputElement("text","Enter your name","username",true);
const nameLabel=createLabelElement("Enter your name:","username");

const ageInput=createInputElement("number","Enter your age","userage",true);
const ageLabel=createLabelElement("Enter your age:","userage");

const emailInput=createInputElement("email","Enter your email","useremail",true);
const emailLabel=createLabelElement("Enter your email:","useremail");

//created wrapper to wrap both label and input field
const groupNamewrapper = wrapMultipleElements(
  [nameLabel, nameInput],
  "input-group"
);

const groupAgewrapper = wrapMultipleElements(
  [ageLabel, ageInput],
  "input-group"
);

const groupEmailwrapper = wrapMultipleElements(
  [emailLabel, emailInput],
  "input-group"
);


// //Select gender lABEL
const genderLabel=createLabelElement("Select your Gender:")

const maleRadioInput = createInputElement("radio", "", "male", "gender","male");
const maleRadioLabel = createLabelElement("Male", "male");
const maleRadioWrapper = wrapMultipleElements(
  [maleRadioLabel, maleRadioInput],
  ""
);

const femaleRadioInput = createInputElement("radio", "", "female", "gender","female");
const femaleRadioLabel = createLabelElement("Female", "female");
const femaleRadioWrapper = wrapMultipleElements(
  [femaleRadioLabel, femaleRadioInput],
  ""
);

const genderRadioWrapper = wrapMultipleElements(
  [
    genderLabel,
    wrapMultipleElements([maleRadioWrapper, femaleRadioWrapper]),
  ],
  "input-group"
);


const submitButton=document.createElement("button");
submitButton.innerText="Submit";
//create input element

function createInputElement(type,placeholder,id,name,value=""){
const inputElement=document.createElement("input");
inputElement.type=type;
inputElement.placeholder=placeholder;
inputElement.id=id;
inputElement.value=value;
inputElement.name=name;
return inputElement;
}



//create input label
function createLabelElement(labelText,labelFor){
  const labelElement=document.createElement("label");
  labelElement.labelText=labelText;
  labelElement.labelFor=labelFor;

  labelElement.innerText = labelText;
return labelElement;

}

//wrap input and label
function createLabelandinputwrap(label,input){
  const wrapper=document.createElement("div");
  wrapper.classList.add("group-wrapper")
  wrapper.appendChild(label)
  wrapper.appendChild(input);
  return wrapper;
}


function wrapMultipleElements(elements, className) {
  const wrapper = document.createElement("div");

  className && wrapper.classList.add(className);
  elements.forEach(function (element) {
    wrapper.appendChild(element);
  });
  return wrapper;
}


//First method to get
// form.addEventListener("submit", function(event){

// event.preventDefault();
// const name=document.getElementById("username").value;
// const age=document.getElementById("userage").value;
// const email=document.getElementById("useremail").value;
// // const male=document.getElementById("male").value;
// // const female=document.getElementById("female").value;

// const gender=document.querySelector('input[name="gender"]:checked').value;
// console.table([name,age,email,gender]);


// })


//Second method to get

form.addEventListener("submit", function(event){

  event.preventDefault();
  const name=event.target.username.value;
  const age=event.target.userage.value;
  const email=event.target.useremail.value;
  const gender=event.target.gender.value;
  
  console.table([name,age,email,gender]);
  })

//Third method to get

// form.addEventListener("submit", function(event){
//   event.preventDefault();

//   const gender=Array.from(event.target["gender"]).filter(function (element){

//     const condition=element.value && element.checked;
//     return condition;
// })[0].value;
// console.log(gender);

// });





form.appendChild(groupNamewrapper);
form.appendChild(groupAgewrapper);
form.appendChild(groupEmailwrapper);

form.appendChild(genderRadioWrapper);
form.appendChild(submitButton);

section.appendChild(form);
ROOT.appendChild(section);