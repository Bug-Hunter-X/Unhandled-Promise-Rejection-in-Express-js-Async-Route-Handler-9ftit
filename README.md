# Unhandled Promise Rejection in Express.js Async Route Handler

This repository demonstrates a common error in Node.js Express.js applications where errors thrown within asynchronous functions inside route handlers are not properly handled, resulting in silent failures.  The example uses a simulated asynchronous operation that randomly throws an error.  The error is logged to the console, but the response to the client is a generic error message, lacking details about the root cause.

## Problem

The issue arises because the `catch` block in the route handler doesn't properly propagate the error information. The client receives a generic 'Something went wrong' message, while the server log only shows a brief summary of the error without a full stack trace.  This makes debugging and identifying the source of the error difficult.

## Solution

The improved version uses a more robust error-handling mechanism that properly logs the error stack trace and provides more context in the response to the client.  This makes it much easier to identify and fix the problem.

## How to run the examples:

1. Clone the repository.
2. Navigate to the repository directory.
3. Run `npm install` to install the required dependencies (express).
4. Run `node bug.js` to see the problematic behavior (it will log to the console and return a generic 500 error). 
5. Run `node bugSolution.js` to see the improved error handling.