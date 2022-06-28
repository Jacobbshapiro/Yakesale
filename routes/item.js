var express = require('express');
var router = express.Router();
var itemsCtrl = require('../controllers/items');

router.get('/', itemsCtrl.index);
router.get('/new', itemsCtrl.new);
router.get('/:id', itemsCtrl.show);
router.post('/', itemsCtrl.create);

module.exports = router;