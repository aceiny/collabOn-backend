const express = require('express');
const router = express.Router();
const { createTask , getAllTasks ,  GetTaskbyId , updateTask , TaskDetails} = require('./controllers');
const { decodeToken } = require('../auth/jwtService');

router.post('/create', decodeToken , createTask);
router.get('/:id' ,  GetTaskbyId);
router.put('/update/:id', decodeToken , updateTask);
router.get('/project/:id', getAllTasks);
router.get('/details/:id' , TaskDetails);

module.exports = router;