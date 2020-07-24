const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("<h1> Welcome home!!!!!!!!!!!! </h1>");
});

router.get("/create-memory", (req, res, next) => {
  res.send("<h1> Create a new memory!!!!</h1>");
});

router.get("*", (req, res, next) => {
  res.send("<h1> Error 404 - This route does not exist");
});

module.exports = router;
