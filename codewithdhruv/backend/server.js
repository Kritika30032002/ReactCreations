const express = require('express');
const cors = require('cors'); // Import the cors package
const app = express();

app.use(cors()); // Enable CORS for all routes
app.use(express.json());

app.get('/', (req, res) => {
    res.send('hello world');
});

app.post('/submit', (req, res) => {
    const userCode = req.body.code;
    const tests = [
        // Edge cases
        { input: 0, expected: false }, // 0 is not a prime number
        { input: 1, expected: false }, // 1 is not a prime number
        { input: 2, expected: true },  // 2 is a prime number
        { input: 3, expected: true },  // 3 is a prime number
      
        // Common cases
        { input: 4, expected: false }, // 4 is not a prime number
        { input: 7, expected: true },  // 7 is a prime number
        { input: 9, expected: false }, // 9 is not a prime number
      
        // Large prime number
        { input: 997, expected: true }, // 997 is a prime number
      
        // Negative numbers
        { input: -5, expected: false }, // -5 is not a prime number
        { input: -7, expected: false }, // -7 is not a prime number
      
        // Larger test cases
        // Add more test cases for larger numbers if needed
      ];
      
  
    try {
      const testResults = runTests(userCode, tests);
      res.status(200).json({ testResults });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  function runTests(code, tests) {
    const testResults = [];
    try {
  // Define the isPrime function within the sandbox
  const sandbox = new Function('n', `${code}; return isPrime(n);`);

  for (const test of tests) {
    try {
      // Execute user's code (isPrime function) on each test case input
      const result = sandbox(test.input);
      const passed = result === test.expected;
      testResults.push({ input: test.input, passed, result });
    } catch (error) {
      testResults.push({ input: test.input, passed: false, error: error.message });
    }
  }
} catch (syntaxError) {
  // Inform about syntax error in the code
  console.log(syntaxError.message)
  testResults.push({ input: null, passed: false, error: `Syntax Error: ${syntaxError.message}` });
}


  console.log(testResults)
    return testResults;
  }


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});








