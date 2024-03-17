const router = require('express').Router();
const {User, Blog} = require('../models');


router.get('/', async (req, res) => {

    const blogData = await Blog.findAll({include:{model: User}}).catch((err) => { 
      res.json(err);
    });
    if(!blogData){
      res.render('error')
    }
    console.log(blogData)
    const blogs = blogData.map((blog) => blog.get({ plain:true }));

    console.log(blogs)
    res.render('blog', {blogs})
});

module.exports = router;