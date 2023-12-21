const express = require("express");
const router = express.Router();

const apisCtrl = require("../controllers/apis");


//API to retrieve all chat
router.get("/", apisCtrl.index);

//API to respond and post
router.post("/", apisCtrl.create);
// //API to shown ai response in chat
// router.get("/:id", apisCtrl.show);


//API to delete an ai response in chat
router.delete("/:id", apisCtrl.delete);

module.exports = router;
