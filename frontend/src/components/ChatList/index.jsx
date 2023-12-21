import { useState, useEffect } from 'react'
import { deleteChat } from "../../utilities/chat-service";
import Chat from '../Chat'


export default function ChatList( {chats, onSelectChat, addNewChat, onSelectedChatId, chatId}) {
    console.log(chatId)
    const [chatBoxId, setChatBoxId] = useState({
        chatId: chatId || null,
      });
      useEffect(() => {
        setChatBoxId((prevPrompt) => ({...chatBoxId, chatId: chatId || null}));
      }, [chatId]);
   
      async function handleDeleteChat() {
        try {
            if (chatId) {
                const deleteChatBox = await deleteChat(chatId);
                console.log("here");
            } else {
                console.log("No chatId available for deletion.");
            }
        } catch (error) {
            console.log('Error from Chat Component for deleting chat:', error);
        }
    }

    function runSelectors(index) {
        onSelectChat(index)
        onSelectedChatId(index)
    }

    return (
        <div className="sidebar">
            <h1>All chats</h1>
            {chats.map((chat, index) => (
                <button className='sidebar-button' key={index} onClick={() => runSelectors(index)}>
                    Chat {index + 1}
                    <button onClick={handleDeleteChat}>Delete</button>
                </button>
            ))}
            <button onClick={addNewChat} className='sidebar-button'>Add New Chat</button>
        </div>
    )
}