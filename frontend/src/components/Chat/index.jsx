import { useState } from 'react'

export default function Chat(props) {

    const [prompt, setPrompt] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        try {
            // send prompt to function that will send it to OpenAi 
            console.log(prompt)
        }
        catch(err) {
            console.log(err)
        }
        setPrompt("")
    }

    function handleChange(e) {  
        setPrompt(e.target.value)
    }

    return (
        // below has the entire chatbox area, input field and chats
        <section>
        {/* map the convsation in the display area in a div */}
        <div>
            {/* display area */}
        </div>
        {/* below is where we have the input field, submit a prompt to be processed by openAI */}
        <form onSubmit={handleSubmit}>
            <input type="text" name="prompt" placeholder='Ask Me Anything :)' value={prompt} onChange={handleChange} required/>
            <input type="submit" value="(Up Arrow)"/>
        </form>
        </section>
    )
}