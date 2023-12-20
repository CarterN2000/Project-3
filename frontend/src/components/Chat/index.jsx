import { useState } from 'react'

export default function Chat({ chatContent }) {

    const [prompt, setPrompt] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        try {
            // send prompt to function that will send it to OpenAi 
            console.log(userInput)
        }
        catch (err) {
            console.log(err)
        }
        setPrompt("")
    }

    function handleChange(e) {
        setPrompt(e.target.value)
    }


    function handleUser(chat) {
        console.log(chat.content)
        return (
            <div className="user-message">{chat.content}</div>
        )
    }

    function handleAssist(chat) {
        return (
            <div className="assist-message"> {chat.content} </div>
        )
    }

    console.log(chatContent)

    return (
        // below has the entire chatbox area, input field and chats
        <section className="chatbox">
            {/* map the convsation in the display area in a div */}
            <h1>CHAT GOES HERE</h1>
            <div className='chats'>
                {/* {chatContent} */}
                {/* {!chatContent ? <h2>Select a Chat</h2> : <h1>{chatContent[1].content}</h1>} */}

                {chatContent?.map(function(chat, idx) {
                    if (!chatContent) {
                        return (
                            <h2>Start Conversation</h2>
                        )
                    }
                    return (
                        chat.role === 'user' ? handleUser(chat) : handleAssist(chat))
                })}


            </div>
            {/* below is where we have the input field, submit a prompt to be processed by openAI */}
            <form onSubmit={handleSubmit} className="bottom-section">
                <input className='input-text' type="text" name="userInput" placeholder='Ask Me Anything :)' value={prompt} onChange={handleChange} required />
                <input className='input-submit' type="submit" value="↑" />
            </form>
        </section>
    )
}

// up arrow -> ⬆️