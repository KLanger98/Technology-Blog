const Comment = require('../models/Comment')

const commentData = [
    {
        content: "So Cool!", 
        date_created: 'January 22, 2024 10:00:00',
        user_id: 2,
        blog_id: 1
    },
    {
        content: "So Cool!", 
        date_created: 'January 22, 2024 10:00:00',
        user_id: 2,
        blog_id: 1
    },
    {
        content: "So Cool!", 
        date_created: 'January 22, 2024 10:00:00',
        user_id: 2,
        blog_id: 1
    }
]

const seedComments = () => Comment.bulkCreate(commentData)

module.exports = seedComments;