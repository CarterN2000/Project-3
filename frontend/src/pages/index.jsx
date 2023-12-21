import Chat from "../components/Chat";
import ChatList from "../components/ChatList";
import { useState, useEffect } from "react";
import "./page.css";
import * as chatService from "../utilities/chat-service";

export default function Page() {
  const [chats, setChats] = useState([]);
  const [chatIds, setChatIds] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getChatInfo() {
    try {
      let messageArr = [];
      let chatIds = [];
      const chatInfo = await chatService.getChats();

      if (chatInfo.length) {
        chatInfo.forEach(function (chat) {
          messageArr.push(chat.messages);
          chatIds.push(chat._id);
        });
      }
      setChats(messageArr);
      setChatIds(chatIds);
    } catch (err) {
      throw new Error("failed to retrieve chat logs");
    }
  }

  useEffect(() => {
    getChatInfo();
  }, []);

  function addNewChat() {
    if (chats.length < 5) {
      setChats([...chats, { id: chats.length + 1, content: "" }]);
    } else {
      //alert user: you can only have up to 5 active chats
      console.log("maximum chats reached");
    }
  }

  const [selectChat, setSelectChat] = useState(null);
  const [selectedChatId, setSelectedChatId] = useState(null);

  return (
    <section className="main-container">
      {/* gradient styling */}
      <div className="gradient-01 z-0 absolute"></div>
      <div className="gradient-02 z-0 absolute"></div>
      <div className="title uppercase font-bold text-2xl text-center mb-3 ">
        <h2>NO Name AI chatbot</h2>
      </div>
      <ChatList
        chats={chats}
        onSelectChat={(index) => {
          const selectedChat = chats[index];
          const selectedChatId = chatIds[index];
          console.log("Selected Chat ID:", selectedChatId);
          setSelectedChatId((prevSelectedChatId) => {
            console.log("Previous Chat ID:", prevSelectedChatId);
            return selectedChatId;
          });
          setSelectChat(selectedChat);
        }}
        onSelectedChatId={(index) => {
          const selectedChatId = chatIds[index];
          console.log("Selected Chat ID (onSelectedChatId):", selectedChatId);
          setSelectedChatId(selectedChatId);
        }}
        addNewChat={addNewChat}
        chatId={selectedChatId}
      />
      <Chat chatContent={selectChat} chatId={selectedChatId} />
    </section>
  );
}

// [
//     {id: 1, content: "The curious cat quietly observed the bustling city from a cozy windowsill."},
//     {id: 2, content: "Amidst the ancient library's silence, a single book fell, revealing a hidden map."},
//     {id: 3, content: "On a sunny afternoon, the old town square buzzed with artists painting vibrant landscapes."},

// ]
