const withAuth = (req, res, next) => {
  if(!req.session.logged_in){
    res.redirect('/login');
  } else if (req.session.logged_in){
    next();
  }
};

module.exports = withAuth;
