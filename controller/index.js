const router = require('express').Router();
const apiRoutes = require('./api');
const homepageRoute = require('./route-homepage')

//Root - renders all pages
router.use('/', homepageRoute);
//api - for everything else
router.use('/api', apiRoutes);

module.exports = router;
