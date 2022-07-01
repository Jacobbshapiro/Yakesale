var express = require('express');
var router = express.Router();
var itemsCtrl = require('../controllers/items');
const isLoggedIn = require('../config/auth');

router.get('/', itemsCtrl.index);
router.get('/new', isLoggedIn, itemsCtrl.new);
router.get('/:id', itemsCtrl.show);
router.post('/', isLoggedIn, itemsCtrl.create);
router.get('/:id/edit', isLoggedIn, itemsCtrl.edit)
router.put('/:id', itemsCtrl.update)

module.exports = router;