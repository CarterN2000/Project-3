const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const chatSchema = new Schema({
  userInput: {
    type: String,
    required: true,
  },
  assistantReply: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Chat", chatSchema);