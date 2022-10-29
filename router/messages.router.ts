import express from "express";
import * as controllers from "../controllers";

const messagesRouter = express.Router();

messagesRouter.get('/', controllers.messages.getMessages)

export default messagesRouter;