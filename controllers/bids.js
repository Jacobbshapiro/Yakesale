const Item = require('../models/item');

module.exports = {
    create,
    delete: deleteBid
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

async function deleteBid(req, res, next) {
    try{
        const item = await Item.findOne({ 'bids._id': req.params.id, 'bids.user': req.user._id})
        if(!item) return res.redirect('/items')
        item.bids.remove(req.params.id)
        await item.save()
        res.redirect(`/items/${item._id}`)
    } catch(err) {
        return next(err)
    }
}