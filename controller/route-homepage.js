const router = require('express').Router();
const {User, Blog, Comment} = require('../models');
const withAuth = require('../utils/auth')


//Render homepage regardless of auth
router.get('/', async (req, res) => {

    try{
      const blogData = await Blog.findAll({include:{model: User}}).catch((err) => { 
      res.json(err);
    });
    if(!blogData){
      res.render('error')
    }
    
    const blogs = blogData.map((blog) => blog.get({ plain:true }));

    console.log(blogs)

    res.render('blog', {blogs, logged_in: req.session.logged_in})
    }catch(err){
      console.log(err);
      res.status(400).json(err)
    }
});

//Login page 
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('login', {logged_in: req.session.logged_in});
});

//Create a new user
router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('signup', {logged_in: req.session.logged_in});
});

//Get all user specific blog posts for dashboard
router.get('/dashboard', withAuth, async (req, res) => {
  try{
    const blogData = await Blog.findAll({
     where: {
       user_id: req.session.user_id
    }
    }).catch((err) => {res.json(err)});

    console.log(req.session.user_id);
    console.log(blogData)
    

    const blogs = blogData.map((blog) => blog.get({ plain:true }));

    res.render('dashboard', {blogs, logged_in: req.session.logged_in})
  } catch(err){
    console.log(err);
    res.status(400).json(err);
  }
});

//return a single blog
router.get('/blog/:id', async (req,res) => {
    try{
      const blogData = await Blog.findByPk(req.params.id,{
        include: [{model: Comment, include: [User]}, {model: User}]
      });

      const blog = blogData.get({ plain:true })


      let belongsToUser;
      if(blog.user_id == req.session.user_id){
        belongsToUser = true;
      } else{
        belongsToUser = false;
      }
      
      console.log(blog)

      res.render('singleBlog', {blog, logged_in: req.session.logged_in, belongsToUser});
      
    }catch(err){
      console.log(err);
      res.status(400).json(err);
    }
});

//Get form to add a blog post
router.get('/add', withAuth, async(req,res) =>{
  
  res.render('addBlogPost')
})




module.exports = router;