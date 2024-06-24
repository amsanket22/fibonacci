const readline = require("readline");

// Create interface for reading input from the console
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to calculate Fibonacci number at position n recursively
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Function to generate Fibonacci sequence
function generateFibonacci(n) {
  let fibSequence = [];

  for (let i = 0; i < n; i++) {
    fibSequence.push(fibonacci(i));
  }

  return fibSequence;
}

// Prompt the user to input a number
rl.question("Enter the number of Fibonacci numbers to generate: ", (input) => {
  const n = parseInt(input);

  if (isNaN(n) || n <= 0) {
    console.log("Please enter a positive integer.");
  } else {
    const fibSequence = generateFibonacci(n);
    console.log(
      `The first ${n} numbers in the Fibonacci sequence are: ${fibSequence.join(
        ", "
      )}`
    );
    console.log("space complexity: O(n)");
    console.log("time complexity: O(2^n)");
  }

  // Close the readline interface
  rl.close();
});
