// Import required modules
import http from 'http';

// Configure the HTTP request options
const options = {
  hostname: 'localhost',
  port: 3000, // Use the same port as the server
  path: '/',
  method: 'GET',
};

// Create an HTTP request
const req = http.request(options, (res) => {
  // Listen for data from the server
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });

  // When the response is complete, log it
  res.on('end', () => {
    console.log(`Response from server: ${data}`);
  });
});

// Handle errors
req.on('error', (error) => {
  console.error(`Request error: ${error.message}`);
});

// Send the request
req.end();
