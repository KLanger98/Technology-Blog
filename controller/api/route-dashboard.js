const router = require('express').Router();
const User = require('../../models/User.js')
const Blog = require('../../models/Blog.js');


//Get all user specific blog posts 
router.get('/', async (req, res) => {
    // const blogData = await Blog.findAll().catch((err) => { 
    //   res.json(err);
    // });

    // if(!blogData){
    //   res.render('error')
    // }

    // const blogs = blogData.map((blog) => blog.get({ plain:true }));
    res.render('blog', blog)
});

//Get a user post by ID
router.post('/:id', async (req,res) =>{
    const blogData = User.findByPk()
})

//Post a user blog post
router.post('/', async (req, res) => {

})

//Update a user blog post 
router.put('/', async (req, res) => {

})

//Delete a user blog post 
router.delete('/', async (req,res) => {

})

module.exports = router;