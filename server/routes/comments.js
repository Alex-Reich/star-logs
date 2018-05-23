var router = require('express').Router()
var Comments = require('../models/comment')

//GET ALL
router.get('/api/comments', (req, res, next) => {
  Comments.find(req.query)
    .then(comments => {
      res.status(200).send(comments)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

//GET BY ID
router.get('/api/comments/:id', (req, res, next)=>{
  Comments.findById(req.params.id)
    .then(comment =>{
      res.status(200).send(comment)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

//ADD
router.post('/api/comments', (req, res, next) => {
  var comment = req.body
  Comments.create(comment)
    .then(newComment => {
      res.status(200).send(newComment)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

//EDIT
router.put('/api/comments/:id', (req, res, next) => {
  Comments.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(comment => {
      res.status(200).send({message: "Successfully Updated", comment})
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

//DESTROY
router.delete('/api/comments/:id', (req, res, next)=>{
  Comments.findByIdAndRemove(req.params.id)
    .then(data=>{
      res.send("Successfully Deleted Comment")
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

module.exports = {
  router
}