const Sequelize = require('sequelize');
const db = require('../config/database');

const Post = db.define('post', {
    title: {
      type: Sequelize.STRING
    },
    text: {
      type: Sequelize.TEXT
    },
    author: {
        type: Sequelize.STRING
    }
});

module.exports = Post;