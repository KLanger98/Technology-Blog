const router = require('express').Router();
const {User, Blog, Comment} = require('../../models')

//Post a user comment
router.post('/', async (req, res) => {
  try{
    
    const commentData = {
    content: req.body.content,
    date_created: req.body.date_created,
    blog_id: req.body.blog_id,
    user_id: req.session.user_id
  }
    const newComment = await Comment.create(commentData);

    console.log(newComment);

    res.status(200).json(newComment)

  } catch(err){
    console.log(err);
    res.status(400).json(err);
  }
})

module.exports = router;