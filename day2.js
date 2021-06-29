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

// Arrays - Array is a collection of items (can be more than one item)
// It is how I create an array of numbers, which is calld "scores"
var scores = [50,80,90,60,70];

// How many items are there in your array
// 5 which means 5 items in your array
console.log(scores.length);

// Retrieving the number that is stated in your [index]
// [0,1,2,3,4] 
// An array always starts with 0 to retrieve the item, you will do scores [index]

console.log(scores[1]);

// Go thorugh the array, retrieve the value from the array
// Show it in the console all the numbers stated in the [index]
for (var i=0; i < scores.length; i++) {
  console.log(scores[i]);
}

// Add an item at the end of the array
scores.push(50);
console.log(scores);

// Remove the last item from an array
scores.pop();
console.log(scores);

// if you want to remove a part of an array, do it (remove item at index x, how many items)

scores.splice(1,1); // here we remove index 1, and 1 item
console.log(scores);

var numberArray = [3,5,1,9,6,4,2];

function minMaxAvg(arr) {
  var average = 0;
  var sum = 0;
  // how to do min? I assume the first one is the smallest one
  var min = arr[0];
  var max = arr[0];
  for (var i=0; i < arr.length; i++) {
    sum += arr[i];
  }
  average = sum / arr.length;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
    for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    }
return [min,max,average];
}
  console.log(minMaxAvg(numberArray));

// Some important string methods

var newString = "Asia Developer Academy";

console.log(newString.length);
console.log(newString.toLowerCase());
console.log(newString.toUpperCase());
console.log(newString.charAt(6));
console.log(newString.indexOf('ev'));
console.log(newString.lastIndexOf('e'));
console.log(newString.substring(5,14));
//Transfer a string into an array (split word by word)
console.log(newString.split(' '));

// Some important number methods
var number = 1.234
console.log(number.toPrecision(2)); // to limit the length of the number
console.log(number.toFixed(2)); // to round up the decimal points

console.log(Math.round(number));
console.log(Math.ceil(number));
console.log(Math.floor(number));
console.log(Math.random(number)); // will give you a random number between 0 and 1

console.log (Math.ceil(Math.random(number)*100));
