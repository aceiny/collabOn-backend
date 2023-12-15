const express = require('express');
const router = express.Router();
const {AccesChat} = require('./controller');

router.get('/:id',AccesChat)

module.exports = router;