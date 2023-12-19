const express = require("express");
const router = express.Router();

const apisCtrl = require("../controllers/apis");

//API to respond and post
router.post("/", apisCtrl.create);

//API to retrieve all chat
router.get("/", apisCtrl.index);

//API to delete an ai response in chat
router.delete("/:id", apisCtrl.delete);

module.exports = router;
