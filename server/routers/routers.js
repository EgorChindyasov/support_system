const Router = require('express')

const router = new Router()

const dataController = require('../controllers/controllers')

router.get('/server', dataController.getData)
router.delete('/delete/:id', dataController.deleteData)
router.post('/server', dataController.insertDeleteData)

module.exports = router