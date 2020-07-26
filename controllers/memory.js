const path = require("path");

const root_path = require("../root_path");
const Memory = require("../models/memory");

exports.getCreateMemory = (req, res, next) => {
  res.sendFile(path.join(root_path, "views", "create_memory.html"));
};

exports.postCreateMemory = (req, res, next) => {
  const cityName = req.body.cityName
  const imageURL = req.body.imageURL

  const memory = new Memory(cityName, imageURL)
  memory.save()
  res.redirect('/')
};
