import "./style.css";
import Card9 from "./assets/9.png";
import Card9Connect from "./assets/9_connect.png";
import printMe from "./print";

console.log("Hello JS");
printMe();

const greeting = "This is typescript!";

const sayHi = (what) => {
  return `Hello ${what}`;
};

const rootDiv = document.createElement("div");

rootDiv.innerHTML = sayHi(greeting);

function component() {
  const element = document.createElement("div");

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = "Hello webpack";
  element.classList.add("hello");

  return element;
}

const image = document.createElement("img");
image.setAttribute("src", Card9);

const image2 = new Image();
image2.src = Card9Connect;

document.body.appendChild(rootDiv);
document.body.appendChild(component());
document.body.appendChild(image);
document.body.appendChild(image2);
