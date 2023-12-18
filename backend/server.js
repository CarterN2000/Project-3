require("dotenv").config();
require("./config/db.connection");

const { PORT } = process.env;
const { Configuration, OpenAIApi } = require("openai");
// const config = new Configuration({
//   apiKey: "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",
// });
// const openai = OpenAIApi(config)


const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const usersRouter = require("./routes/users");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors);
app.use(morgan("dev"));

app.use("/users", usersRouter);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
