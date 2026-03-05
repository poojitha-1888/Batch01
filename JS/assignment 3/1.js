function sumArray(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

let numbers = [1, 2, 3, 4, 5];
console.log("Sum:", sumArray(numbers));






function printEvenNumbers(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      console.log(arr[i]);
    }
  }
}


printEvenNumbers(numbers);





function isPrime(num) {
  if (num < 2) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

function printPrimeNumbers(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) {
      console.log(arr[i]);
    }
  }
}


printPrimeNumbers(numbers);