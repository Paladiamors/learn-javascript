import fetch from "node-fetch";

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
