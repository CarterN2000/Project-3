import * as chatAPI from './chat-api'


export async function getChats() {
    try {
        const chats = await chatAPI.index()
        return chats.chatList
    }
    catch(err) {
        throw new Error('No chats found!')
    }
}

export async function createPrompt (data){
    try{
        const newPrompt = await chatAPI.create(data)
        console.log("hitting service module for creating new prompt")
        //return newPrompt
    }catch(error){
        console.log(error)
    }
}