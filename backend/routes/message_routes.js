const express = require("express");
const router = express.Router();
const { protectRoute } = require("../lib/utils.js");
const { getMessages, getUsersForSidebar, sendMessage } = require("../controllers/message_controller.js");


router.get("/users", protectRoute, getUsersForSidebar);
router.get("/:id", protectRoute, getMessages);
router.post("/send/:id", protectRoute, sendMessage);


module.exports = router;