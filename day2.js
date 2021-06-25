// This is how you declare a function, instead of doing "console.log 3 times", we can declare a function so that we wont have to repeat "console.log"
function sayHello() {
  console.log("Hello");
}
// Need to call or invoke a function then only it will appear in the console

sayHello();

// Delcaring a function with variable / parameter (over time we need to use this vocab instead)

function sayGoodbye(name) {
  console.log("Goodbye "+name);
}

sayGoodbye("Ash");
sayGoodbye("Raj");
sayGoodbye("Syamil");

// Function with 2 parameters with result
function sum(a,b) {
  return a+b
}
console.log(sum(10,4));

// Function with result (example of abstraction if you need to use it later, no need to declare a variable beforehand, just put the number in the bracket)
function checkEven (num) {
  if (num % 2 == 0) {
    return true;
  }
  else {
    return false;
  }
}
console.log(checkEven(10));

// Function with multiple results
function areaVolume(width, length, height) {
  return [width * length * height, width * length];
}
console.log(areaVolume(3,4,5))
