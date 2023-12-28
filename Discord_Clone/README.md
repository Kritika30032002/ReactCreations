## Discord Clone

Discord Clone is a real-time Discord clone built using the MERN stack (MongoDB, Express, React, and Node.js), WebRTC, and Socket.IO. It offers features such as authentication using JWT, creating separate voice rooms and chatting in real-time with other users, video calling, voice calling, screensharing using WebRTC, audio-only mode, friend-adding functionality, and an easy-to-use UI.

## Features

- Authentication using JWT
- Create separate voice rooms and chat in real-time with other users
- Video calling , voice calling , screensharing using WebRTC
- Audio only mode
- Friend Adding Functionality
- Easy to use UI

### Tech Stack

The tech stack used in this project includes:

- MongoDB: a document-oriented database used to store user data, messages, and other information.
- Express: a Node.js framework used to build the server-side application.
- React: a JavaScript library used to build the client-side application.
- Node.js: a JavaScript runtime environment used to run the server-side application.
- WebRTC: a real-time communication technology used for video calling, voice calling, and screensharing.
- Socket.IO: a real-time communication library used for establishing real-time connections between the client and server.

## Getting Started

### Prerequisites

To run this project, you will need Node.js installed on your system.

#### Installation

1. Run in terminal to clone the repository into your directory

```
 git clone https://github.com/Kritika30032002/ReactCreations.git
```

2. Cd to project folder

```
cd Discord_Clone
```

3. Install NPM packages

   ```
   npm install
   ```

   This command will install all the necessary NPM packages for both the server-side and client-side applications.

4. Add the following environment variables in the `.env` file

   ```
   MONGO_URI= your mongo uri here
   TOKEN_KEY= your token key here
   ```

   Replace `your mongo uri here` with the MongoDB connection string and `your token key here` with a secret key used for generating JWT tokens.

5. Start the server side

   ```
   cd discord-backend
   npm start
   ```

   This command will start the server-side application on port 3001.

6. Start the client side

   ```
   cd discord-frontend
   npm start
   ```

   This command will start the client-side application on port 3000.
