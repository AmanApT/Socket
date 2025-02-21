import express from "express";
import { createServer } from "http";
import { initializeSocket } from "./utils/socket.js";
const app = express();
const server = createServer(app);
const PORT = 3000;
initializeSocket(server);


app.get('/',(req,res)=>{
res.send("Hello")
})
server.listen(3000,()=>{
    console.log(`Server running on port:  ${PORT}`)
})