var express = require('express');
var router = express.Router();
const Post = require('../models/Post');

router.get('/', function(req, res, next) {
  Post.findAll()
      .then((posts) => {
        res.send(posts);
      })
      .catch((error) => {
        console.log('Error while fetching posts from db: ', error);
      });
});

router.post('/', function(req, res, next) {
  console.log('req.body = ', req.body);
  Post.create(req.body)
      .then((response) => {
        console.log(response);
        res.send(response);
      })
      .catch((error) => {
        console.log('Error while inserting post in db: ', error);
      })
})

module.exports = router;
