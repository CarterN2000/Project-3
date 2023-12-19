import Chat from "../components/Chat";
import ChatList from "../components/ChatList";
import { useState, useEffect } from 'react'
import './page.css'

export default function Page() {
    return (
        <section className="main-container">
            <div className="title">
                <h2>Title and logo belong here</h2>
            </div>
            <ChatList />
            <Chat />
        </section>
    )
}