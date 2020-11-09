const express = require("express");
const path = require("path");
const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
  //res.send("html served");
});

app.listen(8080, () => {
  console.log("Listening on port 8080");
});
