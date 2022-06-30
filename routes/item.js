var express = require('express');
var router = express.Router();
var itemsCtrl = require('../controllers/items');

router.get('/', itemsCtrl.index);
router.get('/new', itemsCtrl.new);
router.get('/:id', itemsCtrl.show);
router.post('/', itemsCtrl.create);
router.get('/:id/edit', itemsCtrl.edit)
router.put('/:id', itemsCtrl.update)

module.exports = router;