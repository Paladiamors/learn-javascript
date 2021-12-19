function forEachLoop() {
  console.log("forEach loop");
  const arr = [...Array(5).keys()];
  console.log("the array is", arr);
  arr.forEach((x) => {
    console.log("value", x);
  });
  console.log("\n");
}

function forOfLoop(){
  console.log("for of loop");
  // off will get the values of the array
  const arr = ["bob", "jones", "alice", "alex", "paul"];
  for (const x of arr) {
    console.log("value", x);
  }
  console.log("\n");
}

function forInLoop(){
  console.log("for in loop");
  // in will get the index of the array
  const arr = ["bob", "jones", "alice", "alex", "paul"];
  for (const x in arr) {
    console.log("value", x);
  }
  console.log("\n");
}

function forLoop() {
  var i;
  console.log("for loop");
  for (i = 0; i < 5; i++) {
    console.log("for loop i", i);
  }
  console.log("\n");
}

function whileLoop() {
  console.log("while loop");
  var i = 0;
  while (i < 5) {
    console.log("while loop i", i);
    i++;
    if (i == 3) {
      console.log("i is 3!");
      break;
    }
  }
  console.log("\n");
}

function arrayOperations() {
  const people = ["bob", "jones", "alice", "alex", "paul"];
  const persons = ["alica", "kerry", ...people];

  // the in operator checks if the key exists in a prototype
  console.log("bob in people", "bob" in people); // false!
  console.log("length in people", "length" in people); // true!
  console.log("1 in people", 1 in people); // true!
  console.log("5 in people", 5 in people); // false!
  
  console.log("bob included people", people.includes("bob"));
  console.log("index of bob", people.indexOf("bob"));
  console.log("index of jones", people.indexOf("jones"));
  console.log("slicing people", people.slice(1));
  console.log("slicing people", people.slice(1, 2));
  console.log("slicing people", people.slice(-2));
  console.log("negative index", people[-1]); // interesting negative index does not work

  console.log("extending people with persons", persons);
}

forEachLoop();
forOfLoop();
forInLoop();
forLoop();
whileLoop();
arrayOperations();
