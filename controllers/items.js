var Item = require('../models/item');

module.exports = {
    index,
    new: newPost,
    create,
    show,
    edit,
    update
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

function show(req, res) {
  Item.findById(req.params.id, function(err, item) {
    res.render('items/show', {title: 'Item Details', item})
  })
}

function edit(req, res) {
  Item.findById(req.params.id, function(err, item) {
    res.render ('items/edit', {title: "Edit Item Details", item}
  )}
)}

function update (req, res) {
  Item.findByIdAndUpdate(req.params.id, req.body, function(err) {
    res.redirect(`/items/${req.params.id}`)
  })
}