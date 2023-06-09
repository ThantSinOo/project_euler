function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  // Check for divisibility from 2 to the square root of the number
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

function getNthPrime(n) {
  let primeCount = 0;
  let num = 2;

  while (primeCount < n) {
    if (isPrime(num)) {
      primeCount++;
    }
    num++;
  }

  return num - 1;
}

const nthPrime = 10001;
const result = getNthPrime(nthPrime);
console.log(`The ${nthPrime}st prime number is: ${result}`);
