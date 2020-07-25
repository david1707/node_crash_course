
const express = require("express");
const router = express.Router();

const memoryController = require('../controllers/memory');

router.get("/create-memory", memoryController.getCreateMemory);

module.exports = router;
