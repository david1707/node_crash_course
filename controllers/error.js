const path = require("path");

const root_path = require("../root_path");

exports.getError = (req, res, next) => {
  res.sendFile(path.join(root_path, "views", "404.html"));
};
