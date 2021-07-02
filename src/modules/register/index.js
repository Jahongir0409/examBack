const express = require('express')
const {GET, POST, tokenAnlys} = require('./controller')
const registerRouter = express.Router()
registerRouter.route('/register')
    .get(tokenAnlys, GET)
    .post(POST)
module.exports = registerRouter