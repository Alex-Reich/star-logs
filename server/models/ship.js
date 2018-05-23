let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
var schemaName = "Ship"

let schema = new Schema({
    name: { type: String, required: true },
    created: { type: Number, required: true, default: Date.now() },
    class: {
      type: String, required: true, enum:
        [
          'Cruiser',
          'Battleship',
          'Explorer'
        ]}
  })


  module.exports = mongoose.model(schemaName, schema)