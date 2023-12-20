const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const chatMessageSchema = new Schema({
//   role: {
//     type: String,
//     enum: ['user', 'assistant', 'system'],
//     required: true,
//   },
//   content: {
//     type: String,
//     required: true,
//   },
//   timestamp: {
//     type: Date,
//     default: Date.now,
//   },
// });

// const chatSchema = new Schema({
//   messages: [chatMessageSchema],
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// });


// module.exports = mongoose.model('Chat', chatSchema);
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
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true,
  },
  messages: [chatMessageSchema],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Chat', chatSchema);
