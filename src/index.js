const server = require("./app.js");
const connection = require("./config/db.js");
const { app } = require("./config");

const { port, host } = app;

async function startServer() {
    await connection;
    server.listen(port, host, () => {
        console.log(`Server is running on http://${host}:${port}`);
    });
}

startServer()