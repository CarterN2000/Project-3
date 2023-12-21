import { useState, useEffect } from "react";
import { createPrompt, deleteChat } from "../../utilities/chat-service";
import { getChats } from "../../utilities/chat-service";

export default function Chat({ chatContent, chatId }) {
  const [prompt, setPrompt] = useState({
    role: "user",
    content: "",
    chatId: chatId || null,
  });
  useEffect(() => {
    setPrompt((prevPrompt) => ({
      ...prevPrompt,
      chatId: chatId || null,
    }));
  }, [chatId]);

  function handleChange(e) {
    setPrompt({ ...prompt, [e.target.name]: e.target.value || "" });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const newPrompt = await createPrompt(prompt);
      console.log(
        "handle submit is working and passing data to service module"
      );
    } catch (error) {
      console.log(error);
    }
    setPrompt({ role: "user", content: "", chatId: chatId || "" });
  }

  function handleUser(chat) {
    return <div className="user-message">{chat.content}</div>;
  }

  function handleAssist(chat) {
    return <div className="assist-message"> {chat.content} </div>;
  }

  // console.log(chatContent)
  console.log(chatId);
async function handleDeleteChat(){
    try{
        const removeChat = await deleteChat(chatId)
        console.log("here")
    }catch(error){
        console.log('Error from Chat Component for deleting chat:', error);
    }
}



  return (
    // below has the entire chatbox area, input field and chats
    <section className="chatbox">
      {/* map the convsation in the display area in a div */}
      <h1>CHAT GOES HERE</h1>
      <div className="chats">
        {chatContent?.map(function (chat, idx) {
          if (!chatContent) {
            return (
              <div key={idx}>
                <h2>Start Conversation</h2>
              </div>
            );
          }
          return (
            <div key={chat.id || idx}>
              {chat.role === "user" ? handleUser(chat) : handleAssist(chat)}
            </div>
          );
        })}
      </div>
      {/* below is where we have the input field, submit a prompt to be processed by openAI */}
      <form onSubmit={handleSubmit} className="bottom-section">
        <input
          className="input-text"
          type="text"
          name="content"
          placeholder="Ask Me Anything :)"
          value={prompt.content}
          onChange={handleChange}
          required
        />
        <input className="input-submit" type="submit" value="↑" />
      </form>
    </section>
  );
}

// up arrow -> ⬆️
