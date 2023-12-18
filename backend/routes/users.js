const express = require ("express")
const router = express.Router()

const usersCtrl = require ("../controllers/users")

//chatBot - INDEX all Users - GET - /chatbot/
router.get("/", usersCtrl.index)

//chatBot - SHOW one user - GET - /chatbot/:id
router.get("/:id", usersCtrl.show)

//chatBot - CREATE new user - POST - /chatbot/
router.post("/", usersCtrl.create)

//chatBot - DELETE a user - DELETE - /chatbot/:id
router.delete("/:id", usersCtrl.delete)

//chatBot - UPDATE a user - PUT - /chatbot/:id
router.put("/:id", usersCtrl.update)



module.exports = router