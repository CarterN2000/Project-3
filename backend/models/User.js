const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chatSchema = new Schema({
  role: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  
}, { timestamps: true});

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    chats: [chatSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
