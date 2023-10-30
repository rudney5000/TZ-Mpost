import { data } from "autoprefixer"
import { useEffect, useState } from "react"

import io from "socket.io-client"
const socket = io.connect("http://localhost:3001")

const Chat = () => {
    // Room state
    const [room, setRoom] = useState("")

    // Message states
    const [message, setMessage] = useState("")
    const [messageReceived, setMessageReceived] = useState([])

    // const joinRoom = () => {
    //     if (room !== "") {
    //         socket.emit("join_room", room)
    //     }
    // }

    const sendMessage = () => {
        socket.emit("send_message", { message })
        setMessage("")
    }

    useEffect(() => {
        socket.on("receive_message", (data) => {
            // alert(data.message)
            setMessageReceived((pre) => [...pre, data.message])
        })
    }, [socket])

    // function handleSubmit(e) {
    //     e.preventDefault()

    //     console.log("emitted")

    //     socket.emit("send-message", {
    //         username,
    //         message,
    //     })
    //     setMessage("")
    // }
    console.log(messageReceived)

    return (
        <>
            <div className="p-4 max-w-md mx-auto">
                <div className=" text-sm text-gray-700 flex flex-col gap-5 ">
                    <p className="flex flex-col">{messageReceived}</p>
                </div>
                <br />
                <div className="relative flex">
                    <input
                        className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-purple-800"
                        placeholder="Comment..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />

                    <button
                        className="bg-purple-800 text-white rounded-lg px-4 py-2 absolute right-0 bottom-0"
                        onClick={sendMessage}
                    >
                        send
                    </button>
                </div>
            </div>
        </>
    )
}

export default Chat

// socket.on("receive-message", (data) => {
//     setAllMessages((pre) => [...pre, data])
// })

// Bet

// //Room state
// const [room, setRoom] = useState("")

// //Messages states
// const [message, setMessage] = useState("")
// const [messageReceived, setMessageReceived] = useState("")

// const joinRoom = () => {
//     if (room !== "") {
//         socket.emit("join_room", room)
//     }
// }

// const sendMessage = () => {
//     socket.emit("send_message", { message, room })
// }
// useEffect(() => {
//     socket.on("receive_message", (data) => {
//         alert(data.message)
//         setMessageReceived(data.message)
//     })
// }, [socket])
// return (
//     <div className="App">
//         <input
//             value={room}
//             placeholder="Room Number..."
//             onChange={(e) => setRoom(e.target.value)}
//         />
//         <button onClick={joinRoom}>Join Room</button>
//         <input
//             value={message}
//             placeholder="Message..."
//             onChange={(e) => setMessage(e.target.value)}
//         />
//         <button onClick={sendMessage}>Send Message</button>
//         <h1>Message:</h1>
//         {messageReceived}
//     </div>
// )
