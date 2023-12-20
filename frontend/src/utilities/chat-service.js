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