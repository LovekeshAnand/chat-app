# Chat App

A real-time chat application built using **React**, **Node.js**, **Express**, and **Socket.io** that allows users to join rooms and send messages in real-time.

## Features

- Real-time messaging using WebSockets.
- Users can join specific rooms.
- Messages are broadcasted within a room.
- Unique socket ID assigned to each user.

## Tech Stack

### Frontend

- React
- Socket.io-client
- Material UI (for UI components)

### Backend

- Node.js
- Express.js
- Socket.io
- CORS

## Installation

### Prerequisites

- Node.js and npm installed

### Clone the Repository

```bash
git clone <your-repo-url>
cd chat-app
```

## Setup Backend

```bash
cd server
npm install
node index.js
```

This will start the backend server on [**http://localhost:3000**](http://localhost:3000)

## Setup Frontend

```bash
cd client
npm install
npm run dev
```

This will start the frontend on [**http://localhost:5173**](http://localhost:5173)


## How It Works

1. The backend creates a WebSocket server using `socket.io`.
2. Users can join rooms by entering a room name.
3. Messages sent within a room are broadcasted only to members of that room.
4. The frontend listens for real-time updates and displays messages using Material UI components.

## Usage

### Joining a Room

- Enter a **room name** and click "Join".
- Messages sent in this room will only be visible to users in the same room.

### Sending Messages

- Type a message and specify a room name.
- Click "Send" to broadcast the message.

## Future Improvements

- User authentication.
- Persistent chat history using a database.
- Typing indicators.
- Online/offline user status.


