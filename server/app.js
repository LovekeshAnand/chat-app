import express from "express"
import { Server } from "socket.io"
import { createServer } from "http"
import cors from "cors"

const port = 3000
const app = express()

// app.use(cors({
//     origin: "http://localhost:5173",
//     methods: ["GET", "POST"],
//     credentials: true
// })) this can be used while working with api's


const server = createServer(app)
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"],
        credentials: true
    }
})

app.get("/", (req, res) => {
    res.send("Hello world!")
})


io.on("connection", (socket) => {
    console.log("user connected!", socket.id);


    // socket.emit("welcome", `Welcome to the server!`)
    // socket.broadcast.emit("welcome", `${socket.id} joined the server!`)

    // socket.on("message", (data) => {
    //     console.log(data)
    //     socket.broadcast.emit("recieve-message", data)
    // }) this is used for room chats

    socket.on("message", ({room, message}) => {
        console.log({room, message})
        socket.to(room).emit("recieve-message", message) //here we can also write socket.to until and unless we are using .to, socket or io doesn't matter
    }) //this is used to send message to a particular user!

    socket.on('join-room', (roomName) => {
        socket.join(roomName)
        console.log(`User joined room ${roomName}`)
    })//here we are joining the room by typing room name into the room box


    socket.on("disconnect", () => {
        console.log(`User disconnectd! ${socket.id}`)
    })
})

//socket.emit is used to send message to both the sender and reciever 
//socket.broadcast.emit is used to send message to all the recievers expect sender

server.listen(port, () => {
    console.log(`Server is running on port ${port}!`);   
})