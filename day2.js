// Declare a function - to group it

function sayHello(){
  console.log("Hello");
}
// Call or invoke a function

sayHello();
sayHello();
sayHello();

// Declaring a function with variable / parameter

function sayGoodbye(name) {
  console.log("Goodbye "+name);
}
sayGoodbye("Ash");
sayGoodbye("Raj");
sayGoodbye("Syamil");

// Function with 2 parameters with result
function sum(a,b) {
  return a+b;
}
console.log(sum(2,3));
console.log(sum(4,8));

// Function with result..(Example of abstarction.. if you need to use it later, you can use)
function checkEven(number) {
  if (number % 2 == 0) {
    return true;
  }
  else {
    return false;
  }
}
console.log(checkEven(3));

// Function with multiple results..
