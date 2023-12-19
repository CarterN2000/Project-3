const express = require("express")
const OpenAI = require('openai');
const { openAiKey } = require('../config/openKeys');
const Chat = require('../models/Chat');

// Function to get AI response from OpenAI Chat API
async function getAiResponse(req, res) {
  try {
    // Get user input from the request body
    const { userInput } = req.body;

    // Ensure that userInput is not empty
    if (!userInput) {
      return res.status(400).json({ error: 'User input is required.' });
    }

    // Create an instance of OpenAI
    const openai = new OpenAI(openAiKey);

    // Define the conversation prompt
    const prompt = `User: ${userInput}\nAssistant:`;

    // Use OpenAI Chat API to generate a completion
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'system', content: 'You are a helpful assistant.' }, { role: 'user', content: prompt }],
    });

    // Get the assistant's reply from the completion
    const assistantReply = completion.choices[0].message.content;

    // Save the conversation history to your database
    const newChat = new Chat({ userInput, assistantReply });
    await newChat.save();

    // Send the response back to the client/browser
    res.status(200).json({ assistantReply, newChat });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}


async function index(req, res) {
    try {
      const allChats = await Chat.find();
      res.status(200).json(allChats);
    } catch (error) {
      console.error(error);
      res.status(400).json({ error: 'Internal Server Error' });
    }
  }

async function deleteAiResponse(req, res) {
    try {
      const deleteAiChat = await Chat.findByIdAndDelete(req.params.id);
      console.log("ai response got deleted")
    } catch (error) {
      console.error(error);
      res.status(400).json({ error: 'Internal Server Error' });
    }
  }
  
  module.exports = {
    create: getAiResponse,
    index,
    delete: deleteAiResponse
  };

