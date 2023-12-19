import Chat from "../components/Chat";
import ChatList from "../components/ChatList";
import { useState, useEffect } from 'react'
import './page.css'

export default function Page() {
    
    const [chats, setChats] = useState([
        {id: 1, content: "The curious cat quietly observed the bustling city from a cozy windowsill."},
        {id: 2, content: "Amidst the ancient library's silence, a single book fell, revealing a hidden map."},
        {id: 3, content: "On a sunny afternoon, the old town square buzzed with artists painting vibrant landscapes."},

    ])

    function addNewChat() {
        if(chats.length < 5) {
            setChats([...chats], {id: chats.length + 1, content: ""})
        }
        else {
            //alert user: you can only have up to 5 active chats
            console.log('maximum chats reached')
        }
    }

    const [selectChat, setSelectChat] = useState(null)

    return (
        <section className="main-container">
            <div className="title">
                <h2>Title and logo belong here</h2>
            </div>
            <ChatList chats={chats} onSelectChat={index => setSelectChat(chats[index].content)} addNewChat={addNewChat} />
            <Chat chatContent={selectChat} />
        </section>
    )
}