const db = require('../database/db')

class DataController {

    async getData(req, res) {
        const data = await db.query('select * from data')
        res.json(data.rows)
    }

    async deleteData(req, res) {
        const id = req.params.id
        const data = await db.query('delete from data where id = $1', [id])
        res.json(data.rows)
    }
}

module.exports = new DataController()