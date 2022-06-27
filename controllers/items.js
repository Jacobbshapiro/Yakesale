var Item = require('../models/item');

module.exports = {
    index,
    new: newPost,
    create,
    show
};

function index(req, res) {
  Item.find({}, function(err, items) {
    res.render('items/index', {title: 'All Items', items});
  });
}

function show(req, res) {
  Item.findById(req.params.id)
  .populate('bids').exec(function(err, item) {
    bids.find(
      {_id: {$nin: item.bids}},
      function(err, bids) {
        console.log(bids)
        res.render('items/show', { title: 'Item Detail', item, bids});
      }
    )
  });
}

function newPost(req, res) {
  res.render('items/new', {title: 'Post Item'});
}

function create(req, res) {
  req.body.bids = req.body.bids.replace(/\s*,\s*/g, ',');
  if (req.body.bids) req.body.bids = req.body.bids.split(',');
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  var item = new Item(req.body);
  item.save(function(err) {
    if (err) return res.redirect('/items/new');
    console.log(req.body);
    res.redirect('/items');
  });
}