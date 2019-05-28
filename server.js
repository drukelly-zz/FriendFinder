// TODO
// server.js

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const friends = require('./app/data/friends')
const path = require('path')
const PORT = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

require(path.join(__dirname, './app/routing/htmlRoutes'))(app)
// require(path.join(__dirname, './app/routing/apiRoutes'))(app)

// Start express Server
app.listen(PORT, error => {
  if (error) throw error
  console.log(`Click to open => http://localhost:${PORT}`)
})
