// To test whether the number is a prime number
function isPrime(num) {
  for (var i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }
      return true;
    }
// To list down all the prime numbers
    for (var i = 1; i < 1000; i++) {
      if (isPrime(i)) {
        console.log(i);
      }
    }
