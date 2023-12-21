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

export async function deleteChat(chatId) {
    try {
        const response = await chatAPI.deleteChat(chatId);
        if (!response.ok) {
            throw new Error(`Delete request failed with status: ${response.status}`);
        }
        console.log('Chat deleted successfully.');
        return response.json(); 
    } catch (error) {
        console.error('Error deleting chat:', error);
        throw error;
    }
}