
//TO CREATE NEW PROMPT:
// 1- IMPORT USESTATE & SERVICE MODULE FUNCTION
// 2- DEFINE LOCAL STATES AND VARIABLES
// 3- DEFINE HANDLE REQUEST -> TO UPDATE LOCAL STATES
// 4- DEFINE HANDLE SUBMIT -> TO TAKE REQUEST TO BE/SERVICE MODULE
// 5- RETURN -> INCLUDE FORMS AND ONSUBMIT AND ONCHANGE AND -> NAME ATTRIBUTE = MODEL KEYS 

// 1- IMPORT USESTATE & SERVICE MODULE FUNCTION
import {useState} from "react";
import { createPrompt } from "../../utilities/chat-services"

export default function NewChatPrompt(props){
    
    // 2- DEFINE LOCAL STATES AND VARIABLES
    const [chatPrompt, setChatPrompt] = useState({
        role: "user",
        content: " "
    })
    
    
    // 3- DEFINE HANDLE REQUEST -> TO UPDATE LOCAL STATES
    async function handleRequest(e){
        setChatPrompt({...chatPrompt, [e.target.name]: e.target.value})
    }
    
    // 4- DEFINE HANDLE SUBMIT -> TO TAKE REQUEST TO BE/SERVICE MODULE
    async function handleSubmit(e) {
        e.preventDefault();
        try{
            //const newPrompt = await createPrompt(chatPrompt)
            console.log("handle submit is working and passing data to service module")
        }catch (error){
            console.log(error)
        }
    
        return(
            <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={chatPrompt.content} placeholder="Ask Me Anything!" name="content" onChange={handleRequest} />
                <input type="submit" value="Send"/>
            </form>
            </>
        )
    }
}