const router = require('express').Router();
const user = require('./route-user');
const dashboard = require('./route-dashboard');
const blog = require('./route-blog')


router.use('/user', user)
router.use('/dashboard', dashboard)
router.use('/blog', blog)

module.exports = router;