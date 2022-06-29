const express= require('express');
const router = express.Router();

const bidsCtrl = require('../controllers/bids')

router.post('/items/:id/bids', bidsCtrl.create)

module.exports = router;