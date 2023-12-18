require("dotenv").config();
require("./config/db.connection");

const { PORT } = process.env

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const chatBotRouter = require("./routes/chatBot");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors);
app.use(morgan("dev"));

app.use("/chatbot", chatBotRouter);

app.get("/", (req, res) => {
  res.send ("Hello");
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
