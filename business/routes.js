const express = require('express');
const router = express.Router();

const { createBusiness , GetBusinessbyId , updateBusiness, GetBusiness  } = require('./controllers');

const {decodeToken} = require('../auth/jwtService');

router.get('/', decodeToken ,GetBusiness);
router.post('/create', createBusiness);
router.get('/:id', GetBusinessbyId);
router.put('/update/:id', updateBusiness);

module.exports = router;