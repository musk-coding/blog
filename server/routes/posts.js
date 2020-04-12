var express = require('express');
var router = express.Router();
const Post = require('../models/Post');

/* GET users listing. */
router.get('/', function(req, res, next) {
  Post.findAll()
      .then((posts) => {
        res.send(posts);
      })
      .catch((error) => {
        console.log('Error while fetching posts from db: ', error);
      });
});

module.exports = router;
