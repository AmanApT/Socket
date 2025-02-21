import express from "express";
import { createServer } from "http";
import { initializeSocket } from "./utils/socket.js";
import cors from "cors"
const app = express();
const server = createServer(app);
const PORT = 3000;
app.use(cors({
    origin: "http://localhost:5173", // React ka port ensure kar
    methods: ["GET", "POST"]
}));
initializeSocket(server);


app.get('/',(req,res)=>{
res.send("Hello")
})
server.listen(3000,()=>{
    console.log(`Server running on port:  ${PORT}`)
})