const readline = require("readline");

// Create interface for reading input from the console
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to generate Fibonacci sequence using iterative approach
function generateFibonacci(n) {
  let fibSequence = [];

  if (n >= 1) fibSequence.push(0); // Add first number if n >= 1
  if (n >= 2) fibSequence.push(1); // Add second number if n >= 2

  for (let i = 2; i < n; i++) {
    fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
  }

  return fibSequence;
}

// user prompt to input the number
rl.question("Enter the number of Fibonacci numbers to generate: ", (input) => {
  const n = parseInt(input);

  if (isNaN(n) || n <= 0) {
    console.log("Please enter a positive integer.");
  } else {
    // generate the series using both the implementations
    const fibSequence = generateFibonacci(n);
    console.log(
      `The first ${n} numbers in the Fibonacci sequence are: ${fibSequence.join(
        ", "
      )}`
    );
    console.log("space complexity: O(n)");
    console.log("time complexity: O(n)");
  }

  // Close the readline interface
  rl.close();
});
