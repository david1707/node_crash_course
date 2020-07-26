const path = require("path");

const root_path = require("../root_path");

const Memory = require("../models/memory");

exports.getHome = (req, res, next) => {
  console.log(Memory.getMemories());
  res.sendFile(path.join(root_path, "views", "home.html"));
};
