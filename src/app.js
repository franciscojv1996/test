const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");

const router = require('./routes');
const app = express();

//middlewares
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "10mb" }));
app.use(cors());

router(app);

app.use((req, res, next) => {
    res.status(404).json({ message: "Not found" });
})



module.exports = app;