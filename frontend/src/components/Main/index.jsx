import { Routes, Route } from "react-router-dom";
import ChatList from "../ChatList";
import Chat from "../Chat"
import Page from "../../pages";

export default function Main() {
    return (
        <main>
          <Routes>
            <Route path="/" element={<Page />} />
            <Route className="ChatBox" path="/:id" element={<Chat />} />
          </Routes>
        </main>
      );    
}