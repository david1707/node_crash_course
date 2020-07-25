const path = require("path");

const root_path = require("../root_path");

exports.getHome = (req, res, next) => {
  res.sendFile(path.join(root_path, "views", "home.html"));
};
