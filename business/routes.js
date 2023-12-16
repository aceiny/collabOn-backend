const express = require('express');
const router = express.Router();

const { createBusiness  , GetBusinessbyId , GetAllWorkers , updateBusiness, GetBusiness , CreateWorker  } = require('./controllers');

const {decodeToken} = require('../auth/jwtService');

router.get('/', decodeToken ,GetBusiness);
router.post('/create', createBusiness);
router.get('/:id', GetBusinessbyId);
router.put('/update/:id', updateBusiness);
router.get('/workers/:id', GetAllWorkers);
router.post('/worker/create', CreateWorker);
module.exports = router;