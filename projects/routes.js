const express = require('express')
const router = express.Router()
const  {
    createProject,
    GetProjectbyId,
    GetBusinessProjects,
    MakeCollaborationReq
} = require('./controllers')

const {
    decodeToken,
} = require('../auth/jwtService')

router.post('/create', decodeToken ,  createProject)
router.get('/:id', decodeToken  , GetProjectbyId)
router.get('/business/:id', decodeToken , GetBusinessProjects)
router.post('/collaboration', decodeToken , MakeCollaborationReq)
module.exports = router 