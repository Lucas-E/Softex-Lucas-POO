import { Server } from "socket.io";
import { Server as httpServerType } from "http";

export default function socketInit(httpServer:httpServerType):Server{
    const io = new Server(httpServer, {
        cors:{
            origin: 'http://localhost:3000'
        }
    });
    io.on('connection', (socket) => {
        console.log('Someone connectec');
        socket.on('sendMessage', (content) => {
            console.log(content)
            io.emit('recievedMessage', {isMine: false, content:content})
        })
        
    })

    

    return io;
}