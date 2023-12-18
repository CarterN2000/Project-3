const express = require ("express")
const router = express.Router()

const usersCtrl = require ("../controllers/users")

//chatBot - INDEX all chats - GET - /chatbot/
router.get("/", usersCtrl.index)

// //chatBot - SHOW one chat - GET - /chatbot/:id
// router.get("/:id", usersCtrl.show)

// //chatBot - CREATE new chat - POST - /chatbot/
// router.post("/", usersCtrl.create)

// //chatBot - DELETE a chat - DELETE - /chatbot/:id
// router.delete("/:id", usersCtrl.delete)

// //chatBot - UPDATE a chat - PUT - /chatbot/:id
// router.put("/:id", chatBotCtrl.update)



module.exports = router