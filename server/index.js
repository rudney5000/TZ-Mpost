// require express
const express = require("express")
// const app using express
const app = express()
// http
const http = require("http")
// using Server class
const { Server } = require("socket.io")
// require cors
const cors = require("cors")

//app use cors (cors helps to avoid errors)
app.use(cors())
const server = http.createServer(app)

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    },
})

io.on("connection", (socket) => {
    console.log(`User connected: ${socket.id}`)

    socket.on("join_room", (data) => {
        socket.join(data)
    })

    socket.on("send_message", (data) => {
        socket.emit("receive_message", data)
    })
    // socket.on("send_message", (data) => {
    //     socket.to(data.room).emit("receive_message", data)
    // })
})

server.listen(3001, () => {
    console.log("server is running")
})
