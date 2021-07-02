const homeRouter = require('./home')
const adminRouter = require('./admin')
const registerRouter = require('./register')
const loginRoute = require('./login')
const videoRoute = require('./video')
const userRoute = require('./user')
const downloadRoute = require('./download')
module.exports = [homeRouter, adminRouter, registerRouter, videoRoute, userRoute, downloadRoute, loginRoute]
