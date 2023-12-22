import Chat from "../components/Chat";
import ChatList from "../components/ChatList";
import { useState, useEffect } from "react";
import "./page.css";
import * as chatService from "../utilities/chat-service";

export default function Page() {
  const [chats, setChats] = useState([]);
  const [chatIds, setChatIds] = useState([]);

    async function getChatInfo() {
        try {
            let messageArr = []
            let chatIds = []
            const chatInfo = await chatService.getChats()

            if(chatInfo.length) {
                chatInfo.forEach(function(chat) {
                    messageArr.push(chat.messages)
                    chatIds.push(chat._id)
                })
            }
            setChats(messageArr)
            setChatIds(chatIds)
        }
        catch(err){
            throw new Error('failed to retrieve chat logs')
        }
    }

    useEffect(() => {
        getChatInfo()
    },[])
    
    async function addNewChat() {
      try {
        if (chats.length < 5) {
          const newChatInfo = await chatService.createNewChat();
          if (newChatInfo && newChatInfo.chatId) {
            const newChatId = newChatInfo.chatId;
            console.log(newChatInfo);
            setChats([...chats, { id: chats.length + 1, content: "" }]);
          } else {
            console.error("Invalid response from createNewChat:", newChatInfo);
          }
        } else {
          // alert user: you can only have up to 5 active chats
          console.log("maximum chats reached");
        }
      } catch (error) {
        console.error("Error in addNewChat:", error);
        // Handle the error appropriately, e.g., show an error message to the user
      }
    }



    function handleChatDelete(chatId) {
        console.log('here', chatId)
        const updatedChats = chatIds.filter(chat => chat !== chatId);
        setChats(updatedChats)
        window.location.reload()
    }


  const [selectChat, setSelectChat] = useState([]);
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
        onDeleteChat={handleChatDelete}
        addNewChat={addNewChat}
        chatId={selectedChatId}
      />
      <Chat chatContent={selectChat} chatId={selectedChatId} />
    </section>
  );
}
