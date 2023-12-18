const express = require ("express")

const { User } = require("../models/Index")

//get all users

async function index (req, res) {
    try{
        const allUsers = await User.find()
        res.status(200).json({message: "all users retrieved", allUsers})
    }catch (error){
        console.log(error)
        res.status(400).json({message: error.message})
    }
}

//create new user signup
async function create (req, res){
    try{
        const newUser = await User.create(req.body)
        await user.save();
        const user = res.status(201).json({message: "new user created", user})

    } catch(error){
        console.log(error)
        res.status(400).json({message: error.message})
    }
}


// show user profile
async function show (req, res){
    try{
        const userData = await User.findById(req.params.id)
        res.status(200).json({message: "user retrieved to be displayed",user: userData})
    } catch (error){
        console.log(error)
        res.status(400).json({message: error.message})
    }
}

//delete user profile
async function destroy(req, res){
    try{
        const user = await User.findByIdAndDelete(req.params.id)
        res.status(200).json({message:"user got deleted"})
    }catch(error){
        console.log(error)
        res.status(400).json({message: error.message})
    }
}


//update user profile
async function update(req, res){
    try{
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true})
    }catch(error){
        console.log(error)
        res.status(400).json({message: error.message})
    }
}




//get all chats
// const runPrompt = async() =>{
//     const prompt = " "
//     const response = await OpenAI.createCompletion({
//         model: "text-davinci-003",
//         prompt: prompt,
//         max_token: 500,
//         temperature:1,
//     })
// }


module.exports={
    index, 
    show,
    create,
    update,
    delete: destroy
}