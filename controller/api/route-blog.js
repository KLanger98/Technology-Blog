const router = require('express').Router();
const {User, Blog, Comment} = require('../../models')



//Post a user blog post
router.post('/', async (req, res) => {
  

  try{
    
    const blogData = {
    title: req.body.title,
    content: req.body.content,
    date_created: req.body.date_created,
    user_id: req.session.user_id
  }
    const newBlog = await Blog.create(blogData);

    console.log(newBlog);

    res.status(200).json(newBlog)

  } catch(err){
    console.log(err);
    res.status(400).json(err);
  }
})


//Update a user blog post 
router.put('/update/:id', async (req, res) => {
    try{
    const blog = await Blog.findByPk(req.params.id);

    if(!blog){
      return res.status(404).json(err)
    }

    const updateBlog = Blog.update(
      {
      title: req.body.title,
      content: req.body.content
    }, 
    {
      where:{
        id: req.params.id
      }
    });

    res.status(200).json(updateBlog)
  }catch(err){
    console.log(err);
    res.status(400).json(err);
  }
})

//Delete a user blog post 
router.delete('/', async (req,res) => {
  try{let id = req.body.id;

  const blog = await Blog.findByPk(id);

    if(!blog){
      return res.status(404).json(err)
    }

    blog.destroy();
    res.status(200).json(blog);
  } catch(err){
    console.log(err);
    res.status(400).json(err)
  }
})

module.exports = router;