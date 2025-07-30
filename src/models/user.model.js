const db = require("./../config/db")

const createUser = (user, callback) => {
    const sql = 'INSERT INTO user (nombre, edad, dni) VALUES (?, ?, ?)';
    const values = [user.nombre, user.edad, user.dni];

    console.log('¿query es función?', typeof db.query); // ✅ debe imprimir "function"
    db.query(sql, values, callback);
};

const obtenerUser = (callback) => {
    db.query('SELECT * FROM user', callback);
};

module.exports = {
    createUser, obtenerUser
}