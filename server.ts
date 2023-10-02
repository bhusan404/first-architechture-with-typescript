// Import required modules
import http from 'http';

// Create a simple HTTP server
const server = http.createServer((req, res) => {
  // Set response headers
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send a "Hello, World!" response to clients
  res.end('Hello, World!\n');
});

// Start the server on port 3000
const port = 3000;
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
