// printing strings
console.log("hello test");

// printing values
const value = 1 + 2;
console.log("the value is", value);

// a simple function
function adder(a, b) {
  return a + b;
}
console.log("the result of adder is", adder(2, 3));

// creating an object
const bob = { name: "bob", age: 23, height: 127 };
console.log("bob object is", bob);

// accessing a property via dot or string index works
console.log("Bob's name is", bob.name);
console.log("Bob's name is", bob["name"]);

// getting keys
console.log("Keys of bob are", Object.keys(bob));
console.log("can bob run keys?", bob.keys);
console.log("name in bob?", "name" in bob);

// trying to understand object types
console.log("type of bob is", typeof bob);
console.log("Type of instantiated object is", typeof Object());

// what is object
console.log("Object is", Object);

// dealing with arrays
const arr = [1, 2, 3, 4, 5, 6, 7];
var counter = 0;
arr.forEach((x) => {
  console.log("in array", x);
  counter += x;
});
console.log("counter is", counter);
