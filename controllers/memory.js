const path = require("path");

const root_path = require("../root_path");

exports.getCreateMemory = (req, res, next) => {
  res.sendFile(path.join(root_path, "views", "create_memory.html"));
};
