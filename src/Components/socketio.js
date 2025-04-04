import { io } from "socket.io-client";
<<<<<<< HEAD
 
 const socket = io("http://localhost:3000", {
     transports: ["websocket"], // Ensures WebSocket connection
   });
 
 export default socket;
=======

const socket = io("http://localhost:3000", {
  transports: ["websocket"], // Ensures WebSocket connection
});

export default socket;
>>>>>>> b79846cdabc51a7b16f95c5a65aa775161263d11
