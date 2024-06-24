# Fibonacci

Note: These scripts are developed using nodejs so to execute them make sure you have nodejs installed on your system.

scripts do not have any external dependency so you can simply execute them using `node index.js`

1. index.js covers both the approaches iterative as well as recursive. if you want isolated code you can check respective files iterative.js and recursive.js
2. on execution it will prompt for the value of n - first n numbers of the fibonacci series.
3. type the integer value and hit enter - it will give you the comma separated series.
4. on entering non-zero value it shows the validation error it can be improved by re-prompting for new value.
5. test cases are added in index.js which covers all the various scenarios for both the approaches.
6. Iterative Approach
   1. Time and Space complexity will be linear as it directly proportional to your input. it uses only single loop and one variable to store the array.
   2. So space complexity will be `O(n)` and time complexity will also be `O(n)`
7. Recursive Approach
   1. Time complexity will be exponential here since we are recursively calling a function.
   2. Each call to fibonacci(n) makes two recursive calls: fibonacci(n-1) and fibonacci(n-2).
   3. but practically for small number of n - it will be lesser then its square. it will make around 9 calls for value 4 not 16 but for larger value of n it will be closer to its square.
8. Improvements.
   1. Reprompting on invalid input.
   2. Test coverage for the invalid input.
   3. Ability to select the approach through prompt itself rather than calculating it separately or with different file.
