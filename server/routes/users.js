var router = require('express').Router()
var Users = require('../models/user')

//GET ALL
router.get('/api/users', (req, res, next) => {
  Users.find(req.query)
    .then(users => {
      res.status(200).send(users)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

//GET BY ID
router.get('/api/users/:id', (req, res, next)=>{
  Users.findById(req.params.id)
    .then(user =>{
      res.status(200).send(user)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

//ADD
router.post('/api/users', (req, res, next) => {
  var user = req.body
  Users.create(user)
    .then(newUser => {
      res.status(200).send(newUser)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

//EDIT
router.put('/api/users/:id', (req, res, next) => {
  Users.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(user => {
      res.status(200).send({message: "Successfully Updated", user})
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

//DESTROY
router.delete('/api/users/:id', (req, res, next)=>{
  Users.findByIdAndRemove(req.params.id)
    .then(data=>{
      res.send("Successfully Deleted User")
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

module.exports = {router}