const db = require('../database/db')

class DataController {

    async getData(req, res) {
        const data = await db.query('select * from data')
        res.json(data.rows)
    }
}

module.exports = new DataController()