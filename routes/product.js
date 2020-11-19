const router = require('express').Router()
const Controller = require('../controllers/productController')
const authentication = require('../middleware/authentication')

router.use(authentication)
router.get('/', Controller.getAllProduct)
router.post('/', Controller.createProduct)
router.put('/:id', Controller.updateProduct)
router.delete('/:id', Controller.deleteProduct)
router.get('/:id', Controller.findById)

module.exports = router