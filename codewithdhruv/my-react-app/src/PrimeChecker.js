import React, { useState } from 'react';
import './PrimeChecker.css'; // Import the CSS file

function PrimeFinder() {
    const initialCode = `function isPrime(n) {
        // Write your solution here
    }`;
      
    const [code, setCode] = useState(initialCode);
    const [output, setOutput] = useState('');

    const submitCode = async () => {
        // Send code to the server for evaluation
        try {
            const response = await fetch("http://localhost:5000/submit", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ code })
            });

            if (response.ok) {
                const { testResults } = await response.json();
                // Display the test results
                console.log(testResults)
                setOutput(formatTestResults(testResults));
            } else {
                setOutput("Server Error");
            }
        } catch (error) {
            setOutput("Error: " + error.message);
        }
    };

    const formatTestResults = (results) => {
        return results.map((test, index) => (
            <div key={index} className={`test ${test.passed ? 'passed' : 'failed'}`}>
                <span>Input: {test.input}</span>&nbsp;&nbsp;&nbsp;
                {test.error ? (
                    <span>Error: {test.error}</span>
                ) : (
                    <>
                        <span>Result: {test.result.toString()}</span>&nbsp;&nbsp;&nbsp;
                        <span>Passed: {test.passed ? <span className="tick">&#10004;</span> : <span className="cross">&#10008;</span>}</span>
                    </>
                )}
            </div>
        ));
    };

    return (
        <div className="container">
            <h1>Problem: Prime Finder</h1>
            <p>
                Find whether a given number is a prime. Write a function in JavaScript that takes an integer input and returns true if it's a prime, otherwise false.
            </p>
            <p>Note: Please write your solution using JavaScript.</p>
            <div className="code-container">
                <textarea
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    rows="10"
                    cols="50"
                ></textarea>
            </div>
            <button onClick={submitCode}>Submit</button>
            <div className="output">
                {output}
            </div>
        </div>
    );
}

export default PrimeFinder;
