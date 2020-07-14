const express = require("express");

const app = express();

// Routes
app.use("/create-memory", (req, res, next) => {
  res.send("<h1> Create a new memory</h1>");
});

app.use("/", (req, res, next) => {
  res.send("<h1> Hello, welcome to home</h1>");
});

app.listen(3000);
