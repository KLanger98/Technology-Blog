const router = require('express').Router();
const user = require('./route-user');
const blog = require('./route-blog');
const comment = require('./route-comment')

router.use('/users', user);
router.use('/blog', blog);
router.use('/comment', comment);

module.exports = router;