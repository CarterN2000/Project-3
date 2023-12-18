import { Routes, Route } from "react-router-dom";

export default function Main() {
    return (
        <main>
          <Routes>
            <Route path="/" element={<ChatList />} />
          </Routes>
        </main>
      );    
}