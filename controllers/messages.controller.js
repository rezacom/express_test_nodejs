const path = require("path");

function getMessagesController(req, res) {
  res.render("messages", {
    title: "messages",
    friend: "reza shoja",
    message: "reza messages",
  });
  // res.sendFile(
  //   path.join(__dirname, "..", "public", "images", "image-full.png")
  // );
}

module.exports = { getMessagesController };
