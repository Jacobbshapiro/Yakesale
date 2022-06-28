var Item = require('../models/item');

module.exports = {
    index,
    new: newPost,
    create,
};

function index(req, res) {
  Item.find({}, function(err, items) {
    res.render('items/index', {title: 'All Items', items});
  });
}

function newPost(req, res) {
  res.render('items/new', {title: 'Post Item'});
}

function create(req, res) {
  console.log(req.body)
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  const item = new Item(req.body);
  item.save(function(err) {
    if (err) { 
      console.log(err)
      return res.redirect('/items/new');
    }
    res.redirect('/items');
  });
}