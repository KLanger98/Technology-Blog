const Blog = require('../models/Blog')

const blogData = [
    {
        title: "Streamling Database Operations with Sequelize",
        content: `Sequelize is a robust ORM (Object-Relational Mapping) library for Node.js, simplifying database interactions and accelerating development workflows. With Sequelize, developers can seamlessly work with SQL databases like PostgreSQL, MySQL, and SQLite, abstracting away the complexities of raw SQL queries.`, 
        date_created: 'January 22, 2024 09:00:00',
        user_id: 1,
    },
    {
        title: "Understanding Handlebars.js",
        content: "Handlebars.js is a powerful templating engine that revolutionizes frontend development by simplifying the creation of dynamic web pages. With its intuitive syntax and robust features, Handlebars.js empowers developers to build flexible, maintainable, and scalable web applications with ease.", 
        date_created: 'January 22, 2024 09:00:00',
        user_id: 2,
    },
    {
        title: "Understanding Model View Controller",
        content: "MVC (Model-View-Controller) is a software architectural pattern that separates an application into three interconnected components: Model, View, and Controller. This architecture aims to improve the organization, scalability, and maintainability of software systems by enforcing a clear separation of concerns.", 
        date_created: 'January 22, 2024 09:00:00',
        user_id: 3,
    }
]

const seedBlogs = () => Blog.bulkCreate(blogData)

module.exports = seedBlogs;