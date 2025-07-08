const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

// Middlewares
app.use('/public', express.static('upload'));
app.use(morgan("dev"));
app.use(express.json({ limit: "10mb" }));
app.use(cors());

// Rutas
// app.use('/api/tu-ruta', require('./ruta'));

// Ruta no encontrada
app.all("*", (req, res, next) => {
    const err = new Error(`No puedo encontrar ${req.originalUrl} en este servidor`);
    err.status = 404;
    next(err);
});

// Middleware de manejo de errores
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        status: "error",
        message: err.message || "Error interno del servidor",
    });
});

app.listen(3030, () => {
    console.log(`Server on port ${3030}`);
});

module.exports = app;
