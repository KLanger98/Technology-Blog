const Blog = require('../models/Blog')

const blogData = [
    {
        title: "Quick shortcut for selecting all instances of the same string in an IDE like VSCode",
        content: "Simply highlight the string and press the commands 'Command, Shift & L'", 
        date_created: 'January 22, 2024 09:00:00',
        user_id: 1,
    },
    {
        title: "Quick shortcut for selecting all instances of the same string in an IDE like VSCode",
        content: "Simply highlight the string and press the commands 'Command, Shift & L'", 
        date_created: 'January 22, 2024 09:00:00',
        user_id: 2,
    },
    {
        title: "Quick shortcut for selecting all instances of the same string in an IDE like VSCode",
        content: "Simply highlight the string and press the commands 'Command, Shift & L'", 
        date_created: 'January 22, 2024 09:00:00',
        user_id: 3,
    }
]

const seedBlogs = () => Blog.bulkCreate(blogData)

module.exports = seedBlogs;