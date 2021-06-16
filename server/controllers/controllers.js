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

    async insertDeleteData(req, res) {
        const {name, content, isitimportant} = req.body
        const insertData = await db.query('insert into delete_data (name, content, isitimportant) values ($1, $2, $3) returning *', 
                                         [name, content, isitimportant])
        res.json(insertData.rows)
    }
}

module.exports = new DataController()