var mongoose = require('mongoose');
const User = mongoose.model('User');


exports.new = function (req, res) {
  req.session.user = {
  };
  console.log(req.session);
  res.render('layouts/layout');
};
