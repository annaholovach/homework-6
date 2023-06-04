// завдання 2

let header = document.querySelector('h1');
header.style.backgroundColor = '#7fff00';

let myDiv = document.getElementById('myDiv');
let item = myDiv.getElementsByTagName('p');
let newElem = document.createElement('h2');

newElem.innerHTML = item[0].innerHTML;
item[0].parentNode.replaceChild(newElem, item[0]);

item[0].style.color = 'red';

item[1].style.textDecoration = 'underline';

item[2].style.fontStyle = 'italic';

let myList = document.getElementById('myList');
myList.style.display = 'flex';
myList.style.listStyleType = 'none';

let invisible = document.querySelector('span');
invisible.style.display = 'none';

// завдання 3

let body = document.createElement("body");
let main = document.createElement("main");
main.setAttribute("class", "mainClass check item");
let div = document.createElement("div");
div.setAttribute("id", "myDiv");
let paragraph = document.createElement("p");
let text = document.createTextNode("First paragraph");

paragraph.appendChild(text);

div.appendChild(paragraph);
main.appendChild(div);
body.appendChild(main);

document.documentElement.appendChild(body);

// завдання 4

let btn = document.querySelector(".btn");


btn.addEventListener("click", function(event) {
  event.preventDefault();

let inputs = document.querySelectorAll(".arr");

let outputBlock = document.querySelector(".out");

outputBlock.innerHTML = "";

let values = Array.from(inputs).map(input => {
let fieldName = input.getAttribute("data-form");
let value = input.value;
return fieldName + ": " + value;
});

let inputsObj = document.createElement("div");

outputBlock.appendChild(inputsObj);

values.map(value => {
let items = document.createElement("p");
let text = document.createTextNode(value);
items.appendChild(text);
inputsObj.appendChild(items);
});
});

// завдання 5

let circles = document.querySelectorAll(".circle");

Array.from(circles).map(circle => {
  let dataAnim = circle.getAttribute("data-anim");
  circle.classList.add(dataAnim);
  let appliedAnimations = circle.classList.toString();
  console.log("Застосовані анімації для елемента:", appliedAnimations);
});

// завдання 6

let colors = document.querySelectorAll(".color");

let priceElement = document.getElementById("outprice");

Array.from(colors).map(color => {
  color.addEventListener("click", function() {
    let price = this.getAttribute("data-price");

    Array.from(colors).map(color => {
      color.classList.remove("active");
    });
    this.classList.add("active");

    priceElement.textContent = price;
  });
});