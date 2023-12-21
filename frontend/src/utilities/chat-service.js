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
        const responseToPrompt = await chatAPI.create(data)
        return responseToPrompt
    }
    catch(error){
        console.log(error)
    }
}