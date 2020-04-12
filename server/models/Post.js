const Sequelize = require('sequelize');
const db = require('../config/database');

const Post = db.define('post', {
    title: {
      type: Sequelize.STRING
    },
    text: {
      type: Sequelize.STRING
    },
    text: {
        type: Sequelize.TEXT
    }
});

module.exports = Post;