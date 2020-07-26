const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
const mainRoutes = require("./routes/main");
const memoryRoutes = require("./routes/memory");
const errorRoutes = require("./routes/error");

app.use(mainRoutes);
app.use("/memory/", memoryRoutes);
app.use(errorRoutes);


app.listen(3000);
