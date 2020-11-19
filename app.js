require('dotenv').config()
const cors = require('cors')
const { request } = require('express')
const express = require('express')
const app = express()
const port = process.env.PORT
const router = require('./routes/index.js')
const errorHandler = require('./middleware/errorHandler')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/', router)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`this app running at port:${port}`)
})


module.exports = app

// 404 not found