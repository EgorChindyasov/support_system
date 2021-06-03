const Router = require('express')

const router = new Router()

const dataController = require('../controllers/controllers')

router.get('/api/server', dataController.getData)

module.exports = router