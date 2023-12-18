const express = require ("express")
const router = express.Router()

const chatsCtrl = require ("../controllers/chats")

//chatBot - INDEX all chats - GET - /chatbot/
router.get("/", chatsCtrl.index)

//chatBot - SHOW one chat - GET - /chatbot/:id
router.get("/:id", chatsCtrl.show)

//chatBot - CREATE new chat - POST - /chatbot/
router.post("/", chatsCtrl.create)

//chatBot - DELETE a chat - DELETE - /chatbot/:id
router.delete("/:id", chatsCtrl.delete)

//chatBot - UPDATE a chat - PUT - /chatbot/:id
// router.put("/:id", chatsCtrl.update)


module.exports = router