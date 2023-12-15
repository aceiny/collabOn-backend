const express = require('express');
const router = express.Router();

const { createBusiness , GetBusinessbyId , updateBusiness  } = require('./controllers');

router.post('/create', createBusiness);
router.get('/:id', GetBusinessbyId);
router.put('/update/:id', updateBusiness);

module.exports = router;