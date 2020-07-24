const express = require("express");

const app = express();

// Routes
const mainRoutes = require("./routes/routes");

app.use(mainRoutes);

app.listen(3000);
