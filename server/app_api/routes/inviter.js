var express = require('express');
var router = express.Router();

var ctrlInviter = require('../controllers/inviter');

router
.route('/inviter')
.post(ctrlInviter.createInviter);


module.exports = router;