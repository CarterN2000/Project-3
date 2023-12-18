const express = require ("express")
const router = express.Router()

const chatBotCtrl = require ("../controllers/chatBot")

//chatBot - INDEX all chats - GET - /chatbot/
router.get("/", chatBotCtrl.index)

//chatBot - SHOW one chat - GET - /chatbot/:id
router.get("/:id", chatBotCtrl.show)

//chatBot - CREATE new chat - POST - /chatbot/
router.post("/", chatBotCtrl.create)

//chatBot - DELETE a chat - DELETE - /chatbot/:id
router.delete("/:id", chatBotCtrl.delete)

//chatBot - UPDATE a chat - PUT - /chatbot/:id
router.put("/:id", chatBotCtrl.update)



module.exports = router