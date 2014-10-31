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

exports.index3 = function(req, res) {
  res.render('home3.jade', {
    title: 'Home',
    navbar: 'navbar2'
  });
};


exports.index4 = function(req, res) {
  res.render('home4.jade', {
    title: 'Home'
  });
};