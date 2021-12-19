function adder(a, b) {
  return a + b;
}

function addMany(a, b, ...args) {
  // looks like the ... is the splay function gets data out of a list
  console.log(a, b, ...args);
  console.log(a, b, args);
}

// does not work in the same way as python for names parameters
function defaults(a, b, name1 = "James", name2 = "Jones") {
  console.log("defaults", a, b, name1, name2);
}

function defaults2({ a, b, c, name1 = "James", name2 = "Paul" }) {
  console.log("defaults2", a, b, c, name1, name2);
}

addMany(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
defaults(1, 2);
defaults(1, 2, "Bob");

const names = { name1: "alex", name2: "peters" };
defaults(1, 2, { ...names });

const params = { a: 1, b: 2, c: 3, name1: "Billy", name2: "Jones" };
defaults2(params);
defaults2({ a: 1 });

// see if functions can be added to objects

const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mult = (a, b) => a * b;
const div = (a, b) => a / b;

const math = { add, sub, mult, div };

console.log("math.add", math.add(1, 2));
console.log("math[add]", math["add"](1, 2));
console.log("add in math", "add" in math);
