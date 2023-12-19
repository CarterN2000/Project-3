const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chatMessageSchema = new Schema({
  role: {
    type: String,
    enum: ['user', 'assistant', 'system'],
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const chatSchema = new Schema({
  messages: [chatMessageSchema],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});


module.exports = mongoose.model('ChatMessage', chatSchema);