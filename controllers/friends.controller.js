const model = require("../models/friends.model");

function friendsController(req, res) {
  res.json(model);
}

function postFriendController(req, res) {
  if (!req.body.name) {
    return res.status(400).json({
      error: "Missing friend name",
    });
  }
  const newFriend = {
    name: req.body.name,
    id: model.length,
  };
  model.push(newFriend);
  res.json(newFriend);
}

function getFriendController(req, res) {
  const friendId = Number(req.params.id);
  const friend = model[friendId];
  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({ error: "user not found." });
  }
}

module.exports = {
  getFriendController,
  postFriendController,
  friendsController,
};
