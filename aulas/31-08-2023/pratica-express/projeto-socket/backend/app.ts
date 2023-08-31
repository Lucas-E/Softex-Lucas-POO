import express from 'express'
import { createServer } from "http";
import {Server} from 'socket.io'
import cookieParser from "cookie-parser";
import socket from './libs/socket'
import cors from 'cors'

const app = express();
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors({
    origin: ['http://localhost:3000']
}))

const http = createServer(app);
const io = socket(http);


http.listen(8080, () => {
    console.log('server up')
})
