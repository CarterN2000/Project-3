const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const UserSchema = new Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//     },
//     email: {
//       type: String,
//       required: true,
//       unique: true,
//     },
//     password: {
//       type: String,
//       required: true,
//     },
//     chats: [
//       {
//         type: Schema.Types.ObjectId,
//         ref: "Chat",
//       },
//     ],
//   },
//   { timestamps: true }
// );

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
    chats: [{
      type: Schema.Types.ObjectId,
      ref: "Chat",
    }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);

module.exports = mongoose.model("User", UserSchema);
