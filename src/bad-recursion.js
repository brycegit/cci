console.log(fib(100));

function fib(n) {
  if (n === 1 || n === 2) {
    return 1;
  }

  // return fib(n - 2) + fib(n - 1);

  let i = 3;

  let prev2 = 1,
    prev1 = 1,
    curr = 2;

  while (i < n) {
    prev2 = prev1;
    prev1 = curr;
    curr = prev2 + prev1;

    i++;
  }

  return curr;
}
