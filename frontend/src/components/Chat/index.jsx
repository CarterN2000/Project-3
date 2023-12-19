import { useState } from 'react'

export default function Chat(props) {

    const [prompt, setPrompt] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        try {
            // send prompt to function that will send it to OpenAi 
            console.log(prompt)
        }
        catch (err) {
            console.log(err)
        }
        setPrompt("")
    }

    function handleChange(e) {
        setPrompt(e.target.value)
    }

    return (
        // below has the entire chatbox area, input field and chats
        <section className="chatbox">
            {/* map the convsation in the display area in a div */}
            <div className='chats'>
                <h1>CHAT GOES HERE</h1>
                {/* display area */}
            </div>
            {/* below is where we have the input field, submit a prompt to be processed by openAI */}
            <form onSubmit={handleSubmit} className="bottom-section">
                <input className='input-text' type="text" name="prompt" placeholder='Ask Me Anything :)' value={prompt} onChange={handleChange} required />
                <input className='input-submit' type="submit" value="↑" />
            </form>
        </section>
    )
}

// up arrow -> ⬆️