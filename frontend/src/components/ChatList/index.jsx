import { useState, useEffect } from 'react'
import Chat from '../Chat'

export default function ChatList() {
    // state of conversations
    const [conversations, setConversations] = useState()

    const chat1 = "The curious cat quietly observed the bustling city from a cozy windowsill."
    const chat2 = "Amidst the ancient library's silence, a single book fell, revealing a hidden map."
    const chat3 = "On a sunny afternoon, the old town square buzzed with artists painting vibrant landscapes."
    
    const chats = [chat1, chat2, chat3]

    return (
        <div className="sidebar">
            <h1>All chats</h1>
            {chats?.map(function(chat, idx) {
                return (
                    <div key={idx} className="test-chat">
                        {chat}
                    </div>
                )
            })}
        </div>
    )
}