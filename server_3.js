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

app.use((req, res, next) => {
  const start = new Date().now();
  next();
  const delta = new Date().now() - start;
  console.log(`${req.method} ${req.url} ${delta}`);
});

app.get("/", (req, res) => {
  res.send("Hello");
});

app.post("/friends", (req, res) => {
  if (!req.body.name) {
    res.status(400).json({
      error: "Missing name.",
    });
  }

  const newFriend = {
    name: req.body.name,
    id: friends.length,
  };

  friends.push(newFriend);
  res.json(newFriend);
});
app.get("/friends", (req, res) => {
  res.status(200).json(friends);
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

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Listen on port ${PORT}`);
});
