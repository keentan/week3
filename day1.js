// x = 10, y = 3, what is  x + y
// This is called Variable - (String) whatever character, letter
var name = "Keen";
console.log(name);
// String Operation
var message = "Hello "+name; // can only put + because it is not number
console.log(message);

// Variable number
var a = 10;
var b = 3;
// Number Operation
var sum = a + b;
console.log(sum);
var minus = a-b;
console.log(minus);
var product = a * b;
console.log(product);
var division = a/b;
console.log(division);
var modulo = a % b; // it is only to come out with the remainder of the division operation;
console.log(modulo);

// Boolean
var hungry = true;
var tired = false;
// OR and AND （Boolean Operation / Conditional Operation
console.log(hungry && tired);
console.log(hungry || tired);
console.log(!hungry); // - the reverse of the condition

// Condition (if else)
var age = 18;
if (age < 18) {
  console.log("You cannot watch the movie");
}
else {
  console.log("You may watch the movie");
}
if (age < 13) {
  console.log("You cannot watch the movie");
}
else if (age < 18) {
  console.log("You can watch the movie with parents");
}
else {
  console.log("You may watch the movie");
}

var num = 10038;
if (num % 2 == 0) {
  console.log(num+" is an even number");
}
else {
  console.log(num+" is an odd number");
}

var age = 67;
var oriPrice = 100;
if ((age < 18) || (age >= 66)) {
  console.log("Your ticket price is "+oriPrice/2);
}
else if (age > 40) {
  console.log("Your ticket price is "+oriPrice*0.75);
}
else {
  console.log("Your ticket price is "+oriPrice);
}

// For Loop - Repeat 10 times
// from 0 until 10l each iteration add by one
for (var i = 0; i < 100; i++) {
  // show the number
  console.log(i);
}

// from 10 until 0 each iteration will minues by one
for (var i= 0; i > 0; i--) {
  // show the number
  console.log(i);
}

// from 0 until 10 each iteration add by 2
for (var i = 1; i < 10; i+=2) {
  console.log(i);
}

// Multiplication table generator
var multiplier = 4;
var lines = 15;

for (var i = 1; i <= lines; i++) {
  console.log(i+" x "+multiplier+" = "+(i*multiplier));
}
