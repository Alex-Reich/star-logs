var express = require('express')
var bp = require('body-parser')
var app = express()
var cors = require('cors')
var port = 3000

app.use(cors())
//Fire up database connection
require('./server/db/mlab-config')


//REGISTER MIDDLEWEAR
app.use(bp.json())
app.use(bp.urlencoded({
  extended: true
}))

let auth = require('./server/auth/routes')
app.use(auth.session)
app.use(auth.router)
//Code above is always the same ^^

//routes  We had models here????
var users = require('./server/routes/users')
var ships = require('./server/routes/ships')
var logs = require('./server/routes/logs')
var comments = require('./server/routes/comments')

app.use(users.router)
app.use(ships.router)
app.use(logs.router)
app.use(comments.router)

app.use('/members/*', (req, res, next) => {
  if (!req.session.uid) {
    return res.status(401).send({
      error: 'please login to continue'
    })
  }
  next()
})

app.use('/admin/*', (req, res, next) => {
  /**
    Admins.findOne({
        uid: req.session.uid
      })
      .then(isAdmin => {
        if (!isAdmin) {
          return res.status(401).send({
            error: 'Insufficient Privledges'
          })
        }
        next()
      })
    if (!req.session.uid) {
      return res.status(401).send({
        error: 'please login to continue'
      })
    }
    next()
     */
})


//Catch all

app.get('*', (req, res, next) => {
  res.status(404).send({
    error: 'No matching routes'
  })
})


app.listen(port, () => {
  console.log('server running on port', port)
})