const router = require('express').Router();
//const apiRoutes = require('./api');
const homepageRoute = require('./route-homepage')

router.use('/', homepageRoute);
//router.use('/api', apiRoutes);

module.exports = router;
