import React from "react"
import { GiPadlock } from "react-icons/gi"
import { useState } from "react"
import { BiSolidCheckboxChecked } from "react-icons/bi"
import Chat from "./Chat"

export default function Boost() {
    const [showLink, setShowLink] = useState(true)
    const [showChat, setShowChat] = useState(true)

    const handleClick = () => {
        setShowLink(false)
    }

    const handleCommentClick = () => {
        setShowChat(false)
    }

    // // Link to Twitter
    {
        /* <a 
  href="https://twitter.com/intent/tweet?text=Comment+for+points"
  target="_blank"
  onClick={handleTwitterClick} 
>
  Tweet for Points  
</a>

// Handle link click
function handleTwitterClick() {
  // Call API to record user clicked link
}

// Listen for comment webhook from Twitter
app.post('/webhooks/twitter', (req, res) => {

  // Verify comment is from our link

  // Lookup user profile
  const user = getUser(userId);

  // Double points
  user.points *= 2;

  // Save updated user
  saveUser(user);
  
}) */
    }

    return (
        <div className="ml-auto">
            {showLink ? (
                <button
                    onClick={handleClick}
                    className=" h-[25%] flex flex-col bg-purple-800 hover:bg-purple-800 text-white rounded-t-xl rounded-b-xl ml-auto m-10 py-10 px-10  items-center "
                >
                    <GiPadlock />
                    <h1>Boost</h1>
                </button>
            ) : showChat ? (
                <div className=" h-[35%] flex flex-col bg-purple-800 hover:bg-purple-800 text-white rounded-t-xl rounded-b-xl ml-auto m-10 py-10 px-10  items-center ">
                    <h1>Increase your win</h1>
                    <div className="mt-3">
                        <span className="flex flex-row ">
                            <BiSolidCheckboxChecked className="mt-1" />
                            x2 :
                            <button onClick={handleCommentClick}>
                                <u>Leave comment</u>
                            </button>
                        </span>

                        <span className="flex flex-row ">
                            <BiSolidCheckboxChecked className="mt-1" />
                            x2 :
                            <a href="https://twitter.com/home" target="_blank">
                                <u>Share prediction in your timeline </u>
                            </a>
                        </span>
                    </div>
                </div>
            ) : (
                <div className="p-20">
                    <Chat />
                </div>
            )}
        </div>
    )
}
