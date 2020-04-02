const mongoose = require('mongoose')

let PASSWORD = process.env.MONGODB_PASSWORD || 'GvDWCrgDYmNrvTiE'
let USER = process.env.MONGODB_USER || 'user4YE'
let HOSTNAME = process.env.DATABASE_SERVICE_NAME || '127.0.0.1'
let DB = process.env.MONGODB_DATABASE || `sampledb`

let URI = `mongodb://${USER}:${PASSWORD}@${HOSTNAME}:27017/${DB}`
console.log(`DB URI: ${URI}`)
mongoose.connect(URI)
mongoose.Promise = global.Promise
let db = mongoose.connection

module.exports = require('./schema')
