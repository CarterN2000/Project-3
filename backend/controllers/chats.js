const express = require("express")
const Chat = require ("../models/Chat")

// index all chats
async function index(req, res){
    try{
        const chatList = await Chat.find()
        // console.log(chatList)
        res.status(200).json({message: "all chats retrieved", chatList})
        
    } catch (error){
        console.log(error)
        res.status(400).json({message: error.message})
    }
}

// show just one chat
async function show(req, res){
    try{
        const chat = await Chat.findById(req.params.id)
        res.status(200).json({message: "chat retrieved", chat})
    }catch (error){
        console.log(error)
        res.status(400).json({message: error.message})
    }
}

//create a new chat
async function create(req, res){
    try{
        console.log('here')
        const newChat = await Chat.create(req.body)
        res.status(200).json({message: "new chat created", newChat})
    }catch(error){
        console.log(error)
        res.status(400).json({message: error.message})
    }
}


//delete a chat
async function destroy(req, res){
    try{
        const chat = await Chat.findByIdAndDelete(req.params.id)
        res.status(200).json({message: "chat got deleted"})
    }catch (error){
        res.status(400).json({message: error.message})
    }
}



module.exports = {
    index, 
    show,
    create,
    delete: destroy,
}





// const { Configuration, OpenAIApi } = require('openai')
// const config = new Configuration ({
//     apiKey: openAiKey
// })

// function getResponse() {
//     const openAi = new OpenAIApi(config)
//     const runPrompt = async () => {
//         const prompt = "write me a hello world function in javascript"

//     }
// }