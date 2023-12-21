import { useState, useEffect } from "react";
import { createPrompt, deleteChat } from "../../utilities/chat-service";
import { getChats } from "../../utilities/chat-service";

export default function Chat({ chatContent, chatId }) {

  const [prompt, setPrompt] = useState({
    role: "user",
    content: "",
    chatId: chatId || null,
  });

  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [promptSent, setPromptSent] = useState('')

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

      let tempPrompt = prompt
      setPrompt({ role: "user", content: "", chatId: chatId || "" });
      setPromptSent(tempPrompt.content)
      setIsLoading(true)

      const promptResponse = await createPrompt(tempPrompt);
      setResponse(promptResponse)

      setChatHistory(prevHistory => [
        ...prevHistory,
        { role: 'user', content: tempPrompt.content },
        { role: 'assistant', content: promptResponse.assistantReply }
      ]);

      setIsLoading(false)

    } catch (error) {
      console.log(error);
      setPrompt({ role: "user", content: "", chatId: chatId || "" });
    }
  }

  function handleUser(chat) {
    return <div className="user-message border-[#999999]">{chat.content}</div>;
  }

  function handleAssist(chat) {
    return <div className="assist-message"> {chat.content} </div>;
  }


  // console.log(chatContent)
  console.log(chatId);
  async function handleDeleteChat() {
    try {
      const removeChat = await deleteChat(chatId);
      console.log("here");
    } catch (error) {
      console.log("Error from Chat Component for deleting chat:", error);
    }
  }

  const assistantStyle =
    "bg-white bg-opacity-40 backdrop-blur-lg drop-shadow-md";

  return (
    // below has the entire chatbox area, input field and chats
    <section className="chatbox h-[90%] w-full max-w-4xl min-w-[20rem] py-8 self-center px-4">
      {/* map the convsation in the display area in a div */}
      <h1></h1>
      <div className="chats flex flex-col gap-4">
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
              {chat.role === "user" ? (
                <div className="user-chat border-[#999999] break-words  rounded-xl self-end">
                  <span>{handleUser(chat)}</span>
                </div>
              ) : (
                <div
                  className={`assistant-chat inline-flex py-3 user-chat inline-block py-3 border-[#999999] break-words rounded-xl self-end ${assistantStyle}`}
                >
                  <span>{handleAssist(chat)}</span>
                </div>
              )}
            </div>
          );
        })}

        {chatHistory.map((chat, idx) => (
          <div key={idx} className={chat.role === "user" ? "user-message" : "assist-message"}>
            {chat.content}
          </div>
        ))}

        {isLoading ? <div className="user-message">{promptSent} </div> : ''}
        {isLoading ? <div className="loading">Awaiting Response...</div> : '' }

      </div>
      {/* below is where we have the input field, submit a prompt to be processed by openAI */}
      <form onSubmit={handleSubmit} className="bottom-section">
        <input
          className="input-text border-0 bg-transparent outline-none w-full max-w-4xl min-w-[20rem] self-center opacity-[50%]"
          type="text"
          name="content"
          placeholder="Ask Me Anything :)"
          value={prompt.content}
          onChange={handleChange}
          required
        />
        <button className="input-submit" type="submit" value="↑">
          <img src="./send.png" alt="Up Arrow" />
        </button>
      </form>
    </section>
  );
}

