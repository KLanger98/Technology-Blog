const Comment = require('../models/Comment')

const commentData = [
    {
        content: "So Cool!", 
        date_created: 'January 22, 2024 10:00:00',
        user_id: 2,
        blog_id: 1
    },
    {
        content: "This is useful!", 
        date_created: 'January 22, 2024 10:00:00',
        user_id: 1,
        blog_id: 3
    },
    {
        content: "Thought provoking!", 
        date_created: 'January 22, 2024 10:00:00',
        user_id: 3,
        blog_id: 2
    }
]

const seedComments = () => Comment.bulkCreate(commentData)

module.exports = seedComments;