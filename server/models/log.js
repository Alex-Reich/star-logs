let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
var schemaName = "Log"

let schema = new Schema({
    title: { type: String, required: true },
    created: { type: Number, required: true, default: Date.now() },
    body: { type: String, required: true},
    author: { type: String, required: true},
    userId: {type: ObjectId, ref: 'User', required: true},
    shipId: {type: ObjectId, ref: 'Ship', required: true}

  })


module.exports = mongoose.model(schemaName, schema)