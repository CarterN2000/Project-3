import * as chatAPI from './chat-api'
// import axios from 'axios'
// import config from '../config'


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


// export async function createNewChat(data) {
//     try {
//       const response = await axios.post(`${config.BASE_URL}/chats/apis/newChat`, data);
  
//       if (response.data && response.data.chatId) {
//         return { chatId: response.data.chatId };
        
//       } else {
//         throw new Error('Invalid response from createNewChat');
//       }
//     } catch (error) {
//       console.error('Error in createNewChat:', error);
//       throw new Error('Failed to create a new chat');
//     }
//   }