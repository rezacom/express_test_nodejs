import express from "express";
import * as controllers from "../controllers";

const friendsRouter = express.Router();

friendsRouter.get('/', controllers.friends.getFriends)
friendsRouter.get('/:id', controllers.friends.getFriend)
friendsRouter.post('/', controllers.friends.postFriend)

export default friendsRouter;