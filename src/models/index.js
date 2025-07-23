const db = require('../config/db');

class Model {
    constructor(tableName) {
        this.tableName = tableName;
    }

    create(data, callback) {
        const columns = Object.keys(data).join(', ');
        const placeholders = Object.keys(data).map(() => '?').join(', ');
        const sql = `INSERT INTO ${this.tableName} (${columns}) VALUES (${placeholders})`;
        db.query(sql, Object.values(data), callback);
    }

}

module.exports = Model;