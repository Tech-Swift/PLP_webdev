// variables - named container that stores data values

// 1. var - used to declare variables that can be re-assigned
// keyword var = value;

var name = "martin the student"
var age = 20

// 2. let - used to declare variables that can be re-assigned
let car = {
    color: "red",
    model: "toyota",
    price: "1000000",
    speed: "200km/h"
}
console.log(car);

//2. Array - used to store multiple values in a single variable
let fruits = ["apple", "banana", "orange", "grape"]; // Array of strings
console.log(fruits); // Ouput: ["apple", "banana", "orange", "grape"]
console.log(fruits[1]); // Output: "banana"

//3. function - used to declare a block of code that can be called and executed
/*
function functionName(parameter1, parameter2) {
    // code to be executed
}
*/

function greet(name) {
    return "Hello, " + name + "!";
}
console.log(greet("Martin")); // Output: "Hello, Martin!"

function details(name, email) {
    return "Name: " + name + ", Email: " + email;
}
console.log(details("martin", "martin@gmail.com")); // Output: "Name: martin, Email: martin@gmail.com"

//4. operators - used to perform operations on variables and values
// Arithmetic Operators

let a = 50;
let b = 20;

console.log("Addition: " + (a + b));         // 70
console.log("Subtraction: " + (a - b));      // 30
console.log("Multiplication: " + (a * b));   // 1000
console.log("Division: " + (a / b));         // 2.5
console.log("Modulus: " + (a % b));          // 10
console.log("Exponentiation: " + (a ** b));  // 95367431640625


// Assignment Operators
let x = 10;
x += 5; // x = x + 5
console.log("x after += 5: " + x); // 15
x -= 3; // x = x - 3
console.log("x after -= 3: " + x); // 12
x *= 2; // x = x * 2
console.log("x after *= 2: " + x); // 24

// Comparison Operators
// == (equal to)
// === (strictly equal to)
// != (not equal to)
// !== (not strictly equal to)
// > (greater than)
// < (less than)
// >= (greater than or equal to)
// <= (less than or equal to)

let d = 100; // number
let e = "200"; // string
console.log(d == e);  // false (compares values, not types)
console.log(d === e); // false (compares values and types)
console.log(d != e);  // true (values are not equal)
console.log(d !== e); // true (values or types are not equal)
console.log(d > e);   // false (100 is not greater than "200")
console.log(d < e);   // true (100 is less than "200")
console.log(d >= e);  // false (100 is not greater than or equal to "200")
console.log(d <= e);  // true (100 is less than or equal to "200")


//logical operators
// && -- logical and (true if both are true)
// || -- logical or (true if one is true)
// ! -- logical not (true if false)

console.log((d < e) && (d <= e)); // true (both conditions are true)
console.log((d < e) || (d >= e)); // true (one condition is true)
console.log(!(d < e)); // false (negation of true is false)


let myAge = 25;
let isLearner = true;
if (myAge < 25 && isLearner) {
    console.log("You are a young learner!");
} else {
    console.log("You are either not a young learner or not a learner at all.");
}

