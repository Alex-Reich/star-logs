var router = require('express').Router()
var Logs = require('../models/log')

//GET ALL
router.get('/api/logs', (req, res, next) => {
  Logs.find(req.query)
    .then(logs => {
      res.status(200).send(logs)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

//GET BY ID
router.get('/api/logs/:id', (req, res, next)=>{
  Logs.findById(req.params.id)
    .then(log =>{
      res.status(200).send(log)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

//ADD
router.post('/api/logs', (req, res, next) => {
  var log = req.body
  Logs.create(log)
    .then(newLog => {
      res.status(200).send(newLog)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

//EDIT
router.put('/api/logs/:id', (req, res, next) => {
  Logs.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(log => {
      res.status(200).send({message: "Successfully Updated", log})
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

//DESTROY
router.delete('/api/logs/:id', (req, res, next)=>{
  Logs.findByIdAndRemove(req.params.id)
    .then(data=>{
      res.send("Successfully Deleted Log")
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

module.exports = {
  router
}