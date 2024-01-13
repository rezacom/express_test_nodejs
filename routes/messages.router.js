const express = require("express");
const messagesController = require("../controllers/messages.controller");

const messagesRouter = express.Router();
// messagesRouter.use((req, res, next) => {
//   next();
// });

messagesRouter.get("/", messagesController.getMessagesController);

module.exports = messagesRouter;
