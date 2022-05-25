import app from "./app.js";
import {Server as WebsocketServer} from "socket.io"
import http from "http"
import { dbConnected } from "./db.js";
import { PORT } from "./config/env.config.js";
import sockets from './sockets.js'
dbConnected()

const server = http.createServer(app)
const httpServer = server.listen(PORT)
console.log('Server is running on port',PORT)


const io = new WebsocketServer(httpServer)
sockets(io)
