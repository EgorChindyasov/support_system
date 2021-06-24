const Router = require('express')

const router = new Router()

const dataController = require('../controllers/controllers')

router.get('/server', dataController.getData)
router.delete('/server/:id', dataController.closeData)
router.post('/server', dataController.insertClosedData)
router.get('/closed', dataController.getClosedData)
router.delete('/closed/:id', dataController.deleteFromClosed)
router.post('/closed', dataController.insertIntoHome)
router.post('/server/hide', dataController.insertHideData)

module.exports = router