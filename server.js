const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const favicon = require('serve-favicon')
const path = require('path')
const PORT = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(favicon(path.join(__dirname, './app/images', 'favicon.ico')))

app.use(express.static('public'))

require(path.join(__dirname, './app/routing/htmlRoutes'))(app)
require(path.join(__dirname, './app/routing/apiRoutes'))(app)

// Start express Server
app.listen(PORT, error => {
  if (error) throw error
  console.log(`Click to open => http://localhost:${PORT}`)
})