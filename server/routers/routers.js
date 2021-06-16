const Router = require('express')

const router = new Router()

const dataController = require('../controllers/controllers')

router.get('/server', dataController.getData)
router.delete('/post/:id', dataController.deleteData)

module.exports = router