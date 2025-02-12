
const main = document.getElementById("root");
const span = document.createElement("span");
const section = document.createElement("section");
const clearButton = document.createElement("button");
const container = document.createElement("div");

clearButton.classList.add("clear-button");
clearButton.appendChild(document.createTextNode("Clear"));

const padButtons = [
  { text: 1 }, { text: 2 }, { text: 3 },
  { text: 4 }, { text: 5 }, { text: 6 },
  { text: 7 }, { text: 8 }, { text: 9 },
  { text: "*" }, { text: 0 }, { text: "#" }
];

let spanValue = "";

for (let index = 0; index < padButtons.length; index++) {
  const button = document.createElement("button");
  button.appendChild(document.createTextNode(padButtons[index].text));
  button.addEventListener("click", function (event) {
    console.log(event.target.innerText);
    spanValue += padButtons[index].text;
    console.log(spanValue);
    span.innerText = spanValue;
  });
  section.appendChild(button);
}

clearButton.addEventListener("click", function () {
    alert("Values are going to be deleted!!");
    span.innerText = "";
    spanValue = "";
});

container.style.display = "flex";
container.appendChild(span);
container.appendChild(clearButton);

main.appendChild(container);
main.appendChild(section);