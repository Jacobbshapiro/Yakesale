var express = require('express');
var router = express.Router();
var itemsCtrl = require('../controllers/items');

router.get('/', itemsCtrl.index);
router.get('/new', itemsCtrl.new)

module.exports = router;