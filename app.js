const express = require("express");

const app = express();

// Routes
const mainRoutes = require("./routes/main");
const memoryRoutes = require("./routes/memory");
const errorRoutes = require("./routes/error");

app.use(mainRoutes);
app.use('/memory/', memoryRoutes);
app.use(errorRoutes);

app.listen(3000);
