const path = require("path");

function getMessagesController(req, res) {
  // res.sendFile()
  console.log(path.join(__dirname, "..", "assets", "image-full.png"));
  res.sendFile(path.join(__dirname, "..", "assets", "image-full.png"));
}

module.exports = { getMessagesController };
