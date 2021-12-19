const text = "this is some text";
console.log("length of text is", text.length);
console.log("index of text is", text.indexOf("text"));
console.log("getting the splice of text", text.slice(text.indexOf("text"), text.indexOf("text") + "text".length));

console.log("does text include 'some'", text.includes("some"));
console.log("does text include 'else'", text.includes("else"));

console.log("splitting text", text.split(" "));

const age = 10;
const name = "Edward";

const template = `His name is ${name} and his age is ${age}.
There is probably a story behind this.`;

// printing a templated string
console.log(template);
