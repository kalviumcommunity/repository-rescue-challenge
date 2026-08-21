const express = require("express");
const { PORT } = require("./src/config");
const app = express();

app.get("/", (req, res) => {
  res.send(`DevOps assessment app is running on port ${PORT}`);
});

app.get("/health", (req, res) => {
  res.send("OK");
});

app.get("/about", (req, res) => {
  res.send("This is a DevOps assessment app");
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
