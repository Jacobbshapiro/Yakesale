const Item = require('../models/item');

module.exports = {
    create,
}

function create(req, res) {
    Item.findById(req.params.id, function(err, item) {
        req.body.user = req.user._id;
        req.body.userName = req.user.name;
        req.body.userAvatar = req.user.avatar;
        item.bids.push(req.body)
        item.save(function(err) {
            console.log(req.body)
            res.redirect(`/items/${item._id}`)
        })
    })
}