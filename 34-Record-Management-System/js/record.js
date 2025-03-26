
const records=JSON.parse(window.localStorage.getItem("records") ?? JSON.stringify([]));
const ROOT = document.getElementById("table-root");
const table= document.createElement("table");
const thead= document.createElement("thead");
const tbody= document.createElement("tbody");

//For Heading
const head=Object.keys(records[0]);
const tr=document.createElement("tr")
head.forEach(function (element){
// console.log(element);
const headTexTNode=document.createTextNode(element);
const th= document.createElement("th");
th.appendChild(headTexTNode);
tr.appendChild(th)
})


//For Del Head
const thDelete = document.createElement("th");
thDelete.appendChild(document.createTextNode("Delete"));
tr.appendChild(thDelete);
thead.appendChild(tr);
table.appendChild(thead);

//For Inner cells
records.forEach(function (element) {
const tr=document.createElement("tr")
// console.log(Object.values(element));
Object.values(element).forEach(function (text) {
const td=document.createElement("td")
const textNode=document.createTextNode(text);
td.appendChild(textNode);
tr.appendChild(td);
}); 

//Delete button
const td=document.createElement("td");
const delButton=document.createElement("button");
const delButtonText=document.createTextNode("Delete");
delButton.addEventListener("click",function(){
    tr.remove();
    // localStorage.removeItem(tr);
    // tr.clear();
   tr.deleteRow(tr);
});

//Style button
delButton.style.backgroundColor="transparent";
delButton.style.color="azure";
delButton.style.border="2px";
delButton.style.borderStyle="solid";
delButton.style.borderColor="azure";
delButton.style.borderRadius="4px";
delButton.style.padding="5px 10px";
delButton.style.textAlign="center";



delButton.appendChild(delButtonText);
td.appendChild(delButton);
tr.appendChild(td)
tbody.appendChild(tr);
    
});

thead.appendChild(tr);
table.appendChild(thead);
table.appendChild(tbody);
ROOT.appendChild(table);


