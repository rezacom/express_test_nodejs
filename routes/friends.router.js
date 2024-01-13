const express = require("express");
const friendController = require("../controllers/friends.controller");

const friendsRouter = express.Router();
friendsRouter.use((req, res, next) => {
  next();
});

friendsRouter.get("/", friendController.friendsController);

friendsRouter.post("/", friendController.postFriendController);

friendsRouter.get("/:id", friendController.getFriendController);

module.exports = friendsRouter;
