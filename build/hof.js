// A function that takes another function as an argument and returns another function.
const nums = [];
// create a function to generate a Fibonacci sequence up to 100.
function fibonacci(n) {
    if (n <= 1)
        return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
const fibonacciSequence = nums.map(fibonacci(100));
console.log(fibonacciSequence);
