const express = require("express");

const app = express();

const PORT = "3000";

const friends = [
  {
    id: 0,
    name: "reza",
  },
  {
    id: 1,
    name: "ali",
  },
  {
    id: 2,
    name: "ahmad",
  },
];
app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/friends", (req, res) => {
  res.json(friends);
});

app.get("/friends/:id", (req, res) => {
  const friendId = Number(req.params.id);
  const friend = friends[friendId];
  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({ error: "user not found." });
  }
});

app.listen(PORT, () => {
  console.log(`Listen on port ${PORT}`);
});
