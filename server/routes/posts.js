var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let posts = [
    {
      id: 1,
      title: 'Post 1',
      author: 'Author 1',
      text: 'Elit tempor nisi aliquip fugiat cupidatat non. Ut do ut Lorem mollit sit. Ex incididunt cillum aute anim labore eu. Minim aliquip dolor dolor do eu non fugiat sint irure. Aliqua anim labore sunt dolore tempor mollit sit voluptate dolore id minim et. Ullamco aute esse reprehenderit est Lorem. Ex proident sunt ad proident eu veniam consequat tempor nulla reprehenderit labore commodo.'
    },
    {
      id: 2,
      title: 'Post 2',
      author: 'Author 2',
      text: 'Proident ullamco deserunt esse commodo. Adipisicing excepteur officia consectetur anim mollit dolor est eiusmod ullamco nulla dolore sint. Duis deserunt amet dolor est nisi culpa eu exercitation commodo ad. Ullamco aliqua cupidatat id occaecat laboris irure nulla officia labore Lorem. Irure do Lorem qui eu pariatur incididunt aliqua id ipsum. Ex et nulla proident cupidatat sit amet commodo.'
    },
    {
      id: 3,
      title: 'Post 3',
      author: 'Author 3',
      text: 'Dolor consectetur ad cupidatat deserunt deserunt exercitation fugiat in occaecat cupidatat amet. Ullamco voluptate aliquip cillum veniam quis eiusmod non cupidatat aliquip reprehenderit eu velit fugiat tempor. Consectetur do laboris dolore labore nostrud. Qui deserunt pariatur sit enim eiusmod dolore duis ullamco. Duis adipisicing tempor sint consequat tempor labore in nisi amet.'
    }
  ]
  res.send(posts);
});

module.exports = router;
