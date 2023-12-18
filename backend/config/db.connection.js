const mongoose = require("mongoose");

const { DATABASE_URI } = process.env;

mongoose.connect(DATABASE_URI);

mongoose.connection
  .on("open", () => console.log("You are connected to Mongoose"))
  .on("close", () => console.log("You are disconnected from Mongoose"))
  .on("error", (error) => console.log(error));
