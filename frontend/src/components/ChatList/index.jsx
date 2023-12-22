import { useState, useEffect } from 'react'
import { deleteChat } from "../../utilities/chat-service";
import Chat from '../Chat'


export default function ChatList({ chats, onSelectChat, addNewChat, onSelectedChatId, chatId, onDeleteChat }) {
    // console.log(chatId)
    const [chatBoxId, setChatBoxId] = useState({
        chatId: chatId || null,
    });
    useEffect(() => {
        setChatBoxId((prevPrompt) => ({ ...chatBoxId, chatId: chatId || null }));
    }, [chatId]);


    async function handleDeleteChat() {
        try {
            if (chatId) {
                onDeleteChat(chatId)
                const deleteChatBox = await deleteChat(chatId);
                window.location.reload()
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
    const handleRefresh = () => {
    // Reload the current page
        window.location.reload();
    };

    return (

        <div className="sidebar bg-white-slate">
            <div className='flex flex-col'>
                <h1 className='uppercase pb-5 opacity-85'>All chats</h1>
                {chats.map((chat, index) => (
                    <div key={index}>
                        <button className='sidebar-button opacity-25 hover:opacity-75' onClick={() => runSelectors(index)}>
                            Chat {index + 1}
                        </button>
                        <button onClick={handleDeleteChat} className='sidebar-button opacity-25 hover:opacity-75'><span>X</span></button>
                    </div>
                ))}
            </div>
            <form onSubmit={handleRefresh}>
                <button
                    type="submit"  // Change the button type to "submit"
                    className="sidebar-button text-center whitespace-nowrap opacity-50 hover:opacity-100"
                >
                Add New Chat
                </button>
            </form>
        </div>
    )
}