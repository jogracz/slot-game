import "./style.css";

const greeting: string = "This is typescript!";

const sayHi = (what: string): string => {
  return `Hello ${what}`;
};

const rootDiv = document.createElement("div");

rootDiv.innerHTML = sayHi(greeting);

document.body.appendChild(rootDiv);
