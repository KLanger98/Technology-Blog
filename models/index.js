const Blog = require('../models/Blog');
const Comment = require('../models/Comment');
const User = require('../models/User');

//User has many Blog Posts 
User.hasMany(Blog, {
    foreignKey: "user_id",
    onDelete: "CASCADE"
})

//Blog Posts belong to one user 
Blog.belongsTo(User, {
    foreignKey: "user_id"
})

//Blogs have many comments
Blog.hasMany(Comment, {
    foreignKey: "blog_id"
})

// Comments belong to many Blogs
Comment.belongsTo(Blog, {
    foreignKey: "blog_id",
    onDelete: "CASCADE"
})

// Users have many comments
User.hasMany(Comment, {
    foreignKey: "user_id"
})

//Comments have one user 
Comment.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: "CASCADE"
})

module.exports = {Blog, Comment, User}