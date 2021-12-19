const data = { height: 20, width: 100, name: "table" };
const extendedData = { ...data, price: 100 };
const overrideData = { ...data, width: 200, price: 300 };

console.log("data is", data);
console.log("extendedData is", extendedData);
console.log("overrideData is", overrideData);
console.log("height in data", "height" in data);
console.log("data keys", Object.keys(data));
console.log("data values", Object.values(data));
console.log("data entries", Object.entries(data));

console.log("\n")
console.log("looping through an object")
for (const [key, value] of Object.entries(data)) {
  console.log(`${key}: ${value}`);
}
