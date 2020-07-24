const path = require("path");

const express = require("express");
const router = express.Router();

const root_path = require("../root_path");

router.get("/", (req, res, next) => {
  res.sendFile(path.join(root_path, "views", "home.html"));
});

router.get("/create-memory", (req, res, next) => {
  res.sendFile(path.join(root_path, "views", "create_memory.html"));
});

router.get("*", (req, res, next) => {
  res.sendFile(path.join(root_path, "views", "404.html"));
});

module.exports = router;
