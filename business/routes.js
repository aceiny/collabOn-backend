const express = require('express');
const router = express.Router();

const { createBusiness , GetBusinessbyId , UpdateBusiness  } = require('./controllers');

router.post('/create', createBusiness);
router.get('/:id', GetBusinessbyId);
router.put('/:id', UpdateBusiness);

module.exports = router;