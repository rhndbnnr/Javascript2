//Variables and Data Structures

// let name; //undefined
// let todayIsRainy = false; //boolean
// let studentAge = 20; //number
// let myName = "Rhonda"; //string
// let studentNames = ["Rhonda", "Chenoa", "Keith", "Zoe"]; //array
// let person = {name: "Chenoa", age: 24, isSuccessful: true}; //object
// let function = computeArea(width, height) { //function
//     return width * height
// };

//Arithmetic

// let x = 5 + 2; //addition
// let y = x - 3; //subtraction
// let z = x * y; //multiplication
// y = y / 2; //division
// x = x ** 2; //exponentation
// z = x % 2; //modulus
// z++; //increment
// z--; //decrement

//Math Shortcuts

// let x = 5; // x is 5
// x += 2; // x is 7
// x -= 1; // x is 1
// x *= 6; // x is 6
// x /= 2; // x is 3
// x %= 2; // x is 1

//If Statements and Boolean Expressions

//Conditional Operators

// let x = 5, y = 10; // declare variabes for the following examples
// x == y //is equal to value: false
// x === y //is equal to value and type: false
// x != y //is not equal to value: true
// x !== y //is not equal to value and type: true
// x > y //is greater than: false
// x >= y //is greater than or equal to: false
// x < y //is lesser than: true
// x <= y //is lesser than or equal to: true

//Logical Operators

// (5 < 6 && 7 === 8) //AND: false
// (5 < 6 || 7 === 8) //OR: true
// (5 < 6 && !(7 === 8)) //NOT: true

//If Statement Example

// if (day === "Sunday" && time === "9:00am") {
//   alert("Go to Church");
// } else if (
//   (day === "Mondsy" ||
//     day === "Tuesday" ||
//     day === "Wednesday" ||
//     day === "Thursday" ||
//     day === "Friday") &&
//   time === "8:00am"
// ) {
//   alert("Go to School");
// } else {
//   alert("Go Play");
// }

//Loops

//for loop example

// for (let step = 0; step < 5; step++) {
//   //runs 5 times, with values of step 0 through 4
//   console.log("Walking east one step");
// }

//while loop example

// let n = 0;
// let x = 0;
// while (n < 3) {
//   n++;
//   x += n;
// }

//do while loop example

// let i = 0;
// do {
//     i += 1;
//     console.log(i);
// } while (i < 5);

// for in loop example

// for (let i in Math) {
//   console.log(i + "=" + Math[i]);
// }

// const arr = [3, 5, 7];
// arr.foo = "hello";
// //for in example
// for (let i in arr) {
//     console.log(i); // logs "0", "1", "2", "foo"
// }

//for of example
// for (let i in arr) {
//     console.log(i); // logs, 3, 5, 7
// }

//DOM

//run this function when the document is loaded

// window.onload = function () {
//   //create an HTML header
//   const heading = document.createElement("h1");
//   const heading_text = document.createTextNode("Big Head");
//   heading.appendChild(heading_text);
//   document.body.appendChild(heading);
// };

// // Should Familiarize Yourself with the Following as Well

// document.getElementById();
// document.querySelector();
// document.querySelectorAll();
// document.body.appendChild(heading);

//Form Validation Resource

// https://www.w3schools.com/js/js_validation.asp

//Developer Tools Resource

// https://youtu.be/H0aJ-HU_Ijg

//github Resource

//https://youtu.be/SWYqp7iY_Tc
