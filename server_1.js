const express = require("express");

const app = express();

const PORT = "3000";

app.get("/", (req, res) => {
  res.send('Hello');
});

app.get("/users", (req, res) => {
  res.send({ id: 1, name: "reza" });
});

app.get("/masseges", (req, res) => {
  res.send({ id: 1, name: "hello reza" });
});

app.listen(PORT, () => {
  console.log(`Listen on port ${PORT}`);
});
