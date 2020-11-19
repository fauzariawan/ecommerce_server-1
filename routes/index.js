const router = require('express').Router()
const Controller = require('../controllers/userController')
const routerProduct = require('./product')

router.post('/register', Controller.register)
router.post('/login', Controller.login)
router.use('/product', routerProduct)

module.exports = router