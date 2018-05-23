let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
var schemaName = "Comment"

let schema = new Schema({
    title: { type: String, required: true },
    created: { type: Number, required: true, default: Date.now() },
    body: { type: String, required: true},
    author: { type: String, required: true},
    userId: {type: ObjectId, ref: 'User', required: true},
    logId: {type: ObjectId, ref: 'Log', required: true}

  })


  module.exports = mongoose.model(schemaName, schema)