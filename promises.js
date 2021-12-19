import fetch from "node-fetch";
// node_fetch = require("node-fetch")
// fetch = node_fetch.fetch

const p1 = new Promise((resolve, reject) => {
  resolve("success");
});

const p2 = new Promise((resolve, reject) => {
  reject("errored");
});

console.log("promise1", p1);
console.log("promise2", p2);

p1.then((value) => {
  console.log("getting the value of promise", value);
});

p2.then(
  (value) => {
    console.log("this is the result of promise2", value);
  },
  (error) => {
    console.log("error handler", error);
  }
);

// trying something with a fetch
const url = "https://www.google.com";

fetch(url)
  .then((result) => {
    console.log("the result is", result);
    return result.text();
  })
  .then((value) => {
    console.log("the value is", value);
  });

console.log("after the fetch command");
setTimeout(() => console.log("time out"), 1000);
