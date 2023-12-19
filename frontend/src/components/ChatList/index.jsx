import { useState, useEffect } from 'react'
import Chat from '../Chat'

export default function ChatList( {chats, onSelectChat, addNewChat}) {

    return (
        <div className="sidebar">
            <h1>All chats</h1>
            {chats.map((chat, index) => (
                <button className='sidebar-button' key={index} onClick={() => onSelectChat(index)}>
                    Chat {chat.id}
                </button>
            ))}
            <button onClick={addNewChat} className='sidebar-button'>Add New Chat</button>
        </div>
    )
}