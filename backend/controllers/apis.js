const express = require("express");
const OpenAI = require("openai");
const { openAiKey } = require("../config/openKeys");
const ChatModel = require("../models/Chat");

// Conversation history object
const conversationHistory = [];

// Function to get AI response from OpenAI Chat API
async function getAiResponse(req, res) {
  try {
    // Assuming you have some way to get the user ID from the request

    //my problem is i can't generate ids compliant to mongoose
    const userId = req.userId || "1a2b3c4d5e6f7a8b9c0d1e2f";

    // Get user input from the request body
    const { role, content, chatId } = req.body;
    // console.log("api controller", req.body)

    const userInput = content

    // Get user input and topic from the request body
    // const { userInput, topic } = req.body;

    // Ensure that userInput is provided
    //if (!userInput || !topic)   {
    if (!userInput) {
      return res.status(400).json({ error: "User input is required." });
    }

    // Find or create a chat document for the user
    let chatDocument = await ChatModel.findById(chatId);
    //let chatDocument = await ChatModel.findOne({ user: userId, topic });

    if (!chatDocument) {
      // If the chat document doesn't exist, create a new one
      chatDocument = new ChatModel({ user: userId, messages: [] });
    }

    // Construct the conversation prompt based on the chat history
    const prompt = constructConversationPrompt(
      userInput,
      chatDocument.messages
    );
    //console.log(prompt)

    // Use OpenAI Chat API to generate a completion
    const openai = new OpenAI(openAiKey);
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: 'You are a friend who loves to talk about sports. You will only respond to sports related prompts and general greetings. Any other prompts will be responded with something along these lines "Although you may want to discuss other topics, I am designed to only have sports related conversations.". You do not give gambling advice, but you may talk about trends in sports. If you get asked for unrelated topics, try to involve sports. For example, if the user says "send me a fun fact", respond with a fun sports fan. Also, you are a big Pittsburgh Steelers fan, and you will get excited if the Steelers are brought up.'  },
        { role: "user", content: prompt },
      ],
    });

    // Get the assistant's reply from the completion
    const assistantReply = completion.choices[0].message.content;
    // Remove newline characters from the assistant's reply
    // const cleanAssistantReply = assistantReply.replace(/\n/g, ' ');

    // Save the user and assistant messages to the chat document
    chatDocument.messages.push({ role: "user", content: userInput });
    chatDocument.messages.push({ role: "assistant", content: assistantReply });

    // Save the updated chat document to the database
    await chatDocument.save();

    // Append the user and assistant messages to the conversation history
    conversationHistory.push({ role: "user", content: userInput });
    conversationHistory.push({ role: "assistant", content: assistantReply });

    // Send the assistant's reply and chat ID back to the client
    //res.json({ assistantReply: cleanAssistantReply, chatId: chatDocument._id });
    res.json({ assistantReply, chatId: chatDocument._id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

// Helper function to construct a conversation prompt
function constructConversationPrompt(userInput, history) {
  // Combine user input and conversation history
  const messages = history.map((msg) => ({
    role: msg.role,
    content: msg.content,
  }));
  messages.push({ role: "user", content: userInput });

  // Construct the conversation prompt
  const prompt = messages
    .map((msg) => `${msg.role}: ${msg.content}`)
    .join("\n");
  return prompt;
}

// Generate a placeholder user ID (for testing purposes)
// function generatePlaceholderUserId() {
//   return Math.random().toString(36).substring(2, 15);
//}//
//---------------------------------------------------------------------------------//
async function index(req, res) {
  try {
    const allChats = await ChatModel.find();
    res.status(200).json(allChats);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Internal Server Error" });
  }
}

async function deleteChat(req, res) {
  try {
    const {id} = req.params;
    // console.log(id)
    const chatId = id
    // console.log('Deleting chat with ID:', chatId);
    const deleteAiChat = await ChatModel.findByIdAndDelete(chatId);
    // console.log("chat got deleted");
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Internal Server Error" });
  }
}




module.exports = {
  create: getAiResponse,
  index,
  delete: deleteChat,

};
