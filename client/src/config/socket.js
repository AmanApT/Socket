
import { io } from "socket.io-client";

export const createSocketConnection = ()=>{
    // return io(`http//:localhost:3000`)
    return io("http://localhost:3000");


}