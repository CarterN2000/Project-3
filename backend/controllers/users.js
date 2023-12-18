const express = require ("express")

const { User } = require("../models")

//get all users

async function index (req, res) {
    try{
        const allUsers = await User.find()
        res.status(200).json({message: "ok", allUsers})
    }catch (error){
        console.log(error)
        res.status(200).json({message: error.message})
    }
}

//create new user signup
async function create (req, res){
    try{
        const newUser = await User.create(req.body)
        await user.save();
        const user = res.status(201).json({message: "ok", user})

    } catch(error){
        console.log(error)
        res.status(201).json({message: error.message})
    }
}

//get all chats
const runPrompt = async() =>{
    const prompt = " "
    const response = await OpenAI.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        max_token: 500,
        temperature:1,
    })
}


module.exports={
    index, 
    show,
    create,
    update,
    delete: destroy
}