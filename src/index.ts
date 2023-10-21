const greeting: string = "This is typescript!";

const sayHi = (what: string): string => {
  return `Hello ${what}`;
};

const rootDiv = document.getElementById("root");

const text = document.createTextNode(sayHi(greeting));

rootDiv?.appendChild(text);
