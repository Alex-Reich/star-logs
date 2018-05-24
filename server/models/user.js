let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let bcrypt = require('bcryptjs')
const SALT = 10

const RANKS = [
  'Ensign',
  'Lieutenant',
  'Captain',
  'Admiral'
]


let schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, dropDups: true },
  hash: { type: String, required: true },
  created: { type: Number, required: true, default: Date.now() },
  rank: {
    type: String, required: true, enum: RANKS, default: 'Ensign'
  },
  shipId: { type: ObjectId, ref: 'Ship', required: true }
})


// schema.pre('save', function (next) {
//   var user = this;
//   if (!user.isModified('password')) {
//     return next();
//   }}

  schema.statics.generateHash = function (password) {
    return bcrypt.hashSync(password, SALT)
  }

  schema.methods.validatePassword = function (password) {
    return bcrypt.compare(password, this.hash)
  };
 schema.methods.
  module.exports = mongoose.model('User', schema)