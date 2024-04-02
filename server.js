// hbs Template engines

const express = require("express");
const friendsRouter = require("./routes/friends.router");
const messagesRouter = require("./routes/messages.router");
const path = require("path");

const app = express();

// use hbs package views render
app.set("view engine", "hbs");
// create views folder in root and set in here
app.set("views", path.join(__dirname, "views"));

const PORT = "3000";

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.url} ${delta}ms`);
});
app.use("/site", express.static(path.join(__dirname, "public")));
app.use(express.json());

// first one we should create hbs file in views folder
// then in here we should render file and set data for hbs file
app.get("/", (req, res) => {
  res.render("index", {
    title: "Friends",
    caption: "this is caption",
  });
});

app.use("/friends", friendsRouter);
app.use("/messages", messagesRouter);

app.listen(PORT, () => {
  console.log(`Listen on port ${PORT}`);
});
