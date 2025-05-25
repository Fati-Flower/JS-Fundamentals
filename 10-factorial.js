

function factorial(n) {
  if (n < 2) {
    return 1;
  }
  return n * factorial(n - 1);
}

const num = Number(process.argv[2]);

console.log(factorial(num));
