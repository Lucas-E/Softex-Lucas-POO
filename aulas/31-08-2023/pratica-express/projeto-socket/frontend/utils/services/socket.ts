import { io } from "socket.io-client";
import { message } from "@/app/page";

export default function getSocket(setIsConnected:any, setMessages:any):ReturnType<typeof io>{
    const socket = io('http://localhost:8080');
    socket.on('recievedMessage', (data) => {
        setMessages((prev:Array<message>) => ([...prev, data]))
    })
    return socket
}