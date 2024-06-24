const readline = require("readline");
const assert = require("assert");

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

//recursive function
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function generateRecursiveFibonacci(n) {
  let fibSequence = [];

  for (let i = 0; i < n; i++) {
    fibSequence.push(fibonacci(i));
  }

  return fibSequence;
}

// Test cases for Iterative Fibonacci Function
function testIterativeFibonacci() {
  // Test case 1: n = 0
  assert.deepStrictEqual(generateFibonacci(0), [], "Test Case 1 Failed");

  // Test case 2: n = 1
  assert.deepStrictEqual(generateFibonacci(1), [0], "Test Case 2 Failed");

  // Test case 3: n = 2
  assert.deepStrictEqual(generateFibonacci(2), [0, 1], "Test Case 3 Failed");

  // Test case 4: n = 5
  assert.deepStrictEqual(
    generateFibonacci(5),
    [0, 1, 1, 2, 3],
    "Test Case 4 Failed"
  );

  // Test case 5: n = 10
  assert.deepStrictEqual(
    generateFibonacci(10),
    [0, 1, 1, 2, 3, 5, 8, 13, 21, 34],
    "Test Case 5 Failed"
  );

  console.log("All Iterative Fibonacci tests passed!");
}

// Test cases for Recursive Fibonacci Function with Memoization
function testRecursiveFibonacci() {
  // Test case 1: n = 0
  assert.deepStrictEqual(
    generateRecursiveFibonacci(1),
    [0],
    "Test Case 1 Failed"
  );

  // Test case 2: n = 1
  assert.deepStrictEqual(
    generateRecursiveFibonacci(2),
    [0, 1],
    "Test Case 2 Failed"
  );

  // Test case 3: n = 2
  assert.deepStrictEqual(
    generateRecursiveFibonacci(2),
    [0, 1],
    "Test Case 3 Failed"
  );

  // Test case 4: n = 5
  assert.deepStrictEqual(
    generateRecursiveFibonacci(5),
    [0, 1, 1, 2, 3],
    "Test Case 4 Failed"
  );

  // Test case 5: n = 10
  assert.deepStrictEqual(
    generateRecursiveFibonacci(10),
    [0, 1, 1, 2, 3, 5, 8, 13, 21, 34],
    "Test Case 5 Failed"
  );

  console.log("All Recursive Fibonacci tests passed!");
}

// Run the tests
testIterativeFibonacci();
testRecursiveFibonacci();

// user prompt to input the number
rl.question("Enter the number of Fibonacci numbers to generate: ", (input) => {
  const n = parseInt(input);

  if (isNaN(n) || n <= 0) {
    console.log("Please enter a positive integer.");
  } else {
    // generate the series using both the implementations
    const fibSequence = generateFibonacci(n);
    const recursive = generateRecursiveFibonacci(n);
    console.log(
      `The first ${n} numbers in the Fibonacci sequence are: ${fibSequence.join(
        ", "
      )}`
    );
    console.log(
      `The first ${n} numbers in the Fibonacci sequence are: ${recursive.join(
        ", "
      )}`
    );
  }

  // Close the readline interface
  rl.close();
});
