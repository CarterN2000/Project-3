import { Routes, Route } from "react-router-dom";
import ChatList from "../ChatList";
import Chat from "../Chat"

export default function Main() {
    return (
        <main>
          <Routes>
            <Route path="/" element={<ChatList />} />
            <Route className="ChatBox" path="/:id" element={<Chat />} />
          </Routes>
        </main>
      );    
}