const router = require('express').Router();
const {User, Comment, Blog} = require('../../models');

router.get('/:id', async (req,res) => {
    const blogData = Blog.findAll({
        include:{model:Comment},
        where:{
            id: req.body.id
        }
    });

    const blog = blogData.get({ plain:true });

    res.render('blog', {blog})
})

module.exports = router;