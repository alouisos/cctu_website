/**
 * GET /
 * Home page.
 */

exports.index = function(req, res) {
  res.render('home.jade', {
    title: 'Home'
  });
};

exports.index2 = function(req, res) {
  res.render('home2.jade', {
    title: 'Home',
    navbar: 'navbar2'
  });
};
