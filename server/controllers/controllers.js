const db = require('../database/db')

class DataController {

    async getData(req, res) {
        const data = await db.query('select * from data')
        res.json(data.rows)
    }

    async closeData(req, res) {
        const id = req.params.id
        const data = await db.query('delete from data where id = $1', [id])
        res.json(data.rows)
    }

    async insertClosedData(req, res) {
        const {id, name, content, importance} = req.body
        const insertData = await db.query('insert into deleted_data (id, name, content, importance) values ($1, $2, $3, $4) returning *', 
                                         [id, name, content, importance])
        res.json(insertData.rows)
    }

    async insertHideData(req, res) {
        const {id, name, content, importance} = req.body
        const insertData = await db.query('insert into hided_data (id, name, content, importance) values ($1, $2, $3, $4) returning *', 
                                         [id, name, content, importance])
        res.json(insertData.rows)
    }

    async getClosedData(req, res) {
        const data = await db.query('select * from deleted_data')
        res.json(data.rows)
    }

    async deleteFromClosed(req, res) {
        const id = req.params.id
        const data = await db.query('delete from deleted_data where id = $1', [id])
        res.json(data.rows)
    }

    async insertIntoHome(req, res) {
        const {id, name, content, importance} = req.body
        const insertData = await db.query('insert into data (id, name, content, importance) values ($1, $2, $3, $4) returning *', 
                                         [id, name, content, importance])
        res.json(insertData.rows)
    }

    async insertHideData(req, res) {
        const {id, name, content, importance} = req.body
        const insertData = await db.query('insert into hided_data (id, name, content, importance) values ($1, $2, $3, $4) returning *', 
                                         [id, name, content, importance])
        res.json(insertData.rows)
    }

    async getHidedData(req, res) {
        const data = await db.query('select * from hided_data')
        res.json(data.rows)
    }

    async deleteFromHided(req, res) {
        const id = req.params.id
        const data = await db.query('delete from hided_data where id = $1', [id])
        res.json(data.rows)
    }
}

module.exports = new DataController()