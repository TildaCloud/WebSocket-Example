# WebSocket Echo Example

A simple Express.js application that demonstrates WebSocket communication between a client and server. The server echoes back any messages sent by the client.

This example is built for [Tilda's WebSocket support](https://tilda.net/blog/websocket-support/).

## Features

- Express.js web server
- WebSocket server using `ws` library
- Interactive client interface
- Real-time message echoing
- Auto-reconnection if the connection is lost

## Prerequisites

- Node.js (v18 or higher)
- npm (comes with Node.js)
- Tilda CLI (for building and deployment)

## Installation

1. Clone this repository or download the files
2. Install dependencies:

```bash
npm install
```

## Usage

1. Start the server locally:

```bash
npm start
```

2. Open your browser and navigate to `http://localhost:3000`
3. The client will automatically connect to the WebSocket server
4. Type a message in the input field and click "Send" or press Enter
5. The server will echo your message back to the client

## Building for Production

To build the application for production deployment:

```bash
npm run build
```

This command uses the Tilda CLI to build the project, preparing both the server and client code for deployment. Make sure to have the Tilda CLI installed before running this command using `npm install -g @tildacloud/cli`.

## Deployment

To deploy the application to Tilda:

```bash
tilda deploy --project <project-slug> --site <site-slug>
```

Replace `<project-slug>` with your Tilda project identifier and `<site-slug>` with your site identifier.

## How It Works

- The Express server serves static files from the `public` directory
- The WebSocket server is attached to the same HTTP server
- When a client connects, the server sends a welcome message
- Any message from the client is logged and echoed back with "Echo: " prefix
- The client displays both sent and received messages in a scrollable container
- If the connection is lost, the client attempts to reconnect automatically

## Project Structure

- `app/server.js` - The Express and WebSocket server
- `public/index.html` - The client-side HTML and JavaScript
- `package.json` - Project configuration and dependencies
