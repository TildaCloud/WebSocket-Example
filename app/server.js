const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const path = require('path');

// Create Express application
const app = express();

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, '../public')));

// Create HTTP server
const server = http.createServer(app);

// Create WebSocket server
const wss = new WebSocket.Server({ server });

// WebSocket connection handler
wss.on('connection', (ws) => {
  console.log('Client connected');
  
  // Message handler - echo the message back to the client
  ws.on('message', (message) => {
    console.log(`Received message: ${message}`);
    ws.send(`Echo: ${message}`);
  });
  
  // Connection closed handler
  ws.on('close', () => {
    console.log('Client disconnected');
  });
  
  // Send a welcome message
  ws.send('Connected to WebSocket server');
});

// Define the port to listen on
const PORT = process.env.PORT || 3000;

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
