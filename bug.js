const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Simulate an asynchronous operation that might throw an error
  someAsyncOperation().then(() => {
    res.send('Hello, world!');
  }).catch(err => {
    // This will not log the error properly
    console.error(err); // Error is swallowed
    res.status(500).send('Something went wrong');
  });
});

function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    // Simulate an error condition randomly
    if (Math.random() < 0.5) {
      reject(new Error('Simulated asynchronous error'));
    } else {
      resolve();
    }
  });
}

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});