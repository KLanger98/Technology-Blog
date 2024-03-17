const User = require('../models/User')

const userData = [
    {
        username: 'KarlosLangos',
        email: 'karlosLangos@gmail.com',
        password: 'karlosLangos'
    },
    {
        username: 'JohnnySmith',
        email: 'johnnysmith@gmail.com',
        password: 'johnnySmith'
    },
    {
        username: 'DoreenSmith',
        email: 'doreensmith@gmail.com',
        password: 'doreenSmith'
    }
]

const seedUsers = () => User.bulkCreate(userData)

module.exports = seedUsers;