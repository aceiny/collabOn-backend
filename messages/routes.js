const express = require('express');
const router = express.Router();
const {
    GetAllMessages,
    SendMessage,
    DeleteMessage
} = require('./controllers')
const {
    decodeToken
} = require('../auth/jwtService')
router.get('/:id',GetAllMessages)
router.post('/', decodeToken , SendMessage)
router.delete('/:id',DeleteMessage)

module.exports = router