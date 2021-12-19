// Comparison operators with numbers
console.log("Operators with numbers");
console.log("8 > 5", 8 > 5);
console.log("8 >= 5", 8 >= 8);
console.log("8 < 5", 8 < 5);
console.log("8 == 8", 8 == 8);
console.log("8 == '8'", 8 == '8');
console.log("8 === '8'", 8 === '8');
console.log("8 === 8.0", 8 === 8.0);
console.log("8 == 8.0", 8 == 8.0);
console.log("8 != 8", 8 != 8);
console.log("\n");

// logical operators

console.log("logical operators");
console.log("true && true", true && true);
console.log("true && false", true && false);
console.log("true || false", true || false);
console.log("false || false", false || false);
console.log("\n");

// Terminary operator

console.log("Terminary operator");
console.log("true ? 'yes' : 'no' ->", true ? 'yes' : 'no');
console.log("\n");

// Output if true or false

console.log("Output if true or false");
console.log("true && 'this is outputted'", true && 'this is outputted');
console.log("false || 'this is outputted'", false || 'this is outputted');

console.log("false && 'output is left value'", false && 'output is left value');
console.log("true || 'output is left value'", true || 'output is left value');
console.log("\n");

// Falsy and Truthy

console.log("Falsy and Truthy");
console.log("0 is falsy:", 0 || "Falsy")
console.log("0.0 is falsy:", 0.0 || "Falsy")
console.log("[] is falsy:", [] || "Falsy")
console.log("{} is falsy:", {} || "Falsy")
console.log("null is falsy:", null || "Falsy")
console.log("'' is falsy:", '' || "Falsy")


console.log("1 is truthy:", 1 && "Truthy")
console.log("1.0 is truthy:", 1.0 && "Truthy")
console.log("'value' is truthy:", 'value' && "Truthy")
console.log("true is truthy:", true && "Truthy")
console.log("[1] is truthy:", [1] && "Truthy")
console.log("{bob:'bob'} is truthy:", {bob:'bob'} && "Truthy")
console.log("\n");