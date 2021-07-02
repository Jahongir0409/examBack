const path = require('path')
const {getVid} = require('./model')

const GET = (req, res) => {
    res.json(getVid())
}

module.exports = {GET}