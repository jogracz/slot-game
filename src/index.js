import "./style.css";
import Card9 from "./assets/9.png";

console.log("Hello JS");

const greeting = "This is typescript!";

const sayHi = (what) => {
  return `Hello ${what}`;
};

const rootDiv = document.getElementById("root");

const text = document.createTextNode(sayHi(greeting));

rootDiv?.appendChild(text);

function component() {
  const element = document.createElement("div");

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = "Hello webpack";
  element.classList.add("hello");

  return element;
}

const image = document.createElement("img");
image.setAttribute("src", Card9);

document.body.appendChild(component());
document.body.appendChild(image);
