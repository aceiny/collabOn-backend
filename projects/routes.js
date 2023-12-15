const express = require('express')
const router = express.Router()
const  {
    createProject,
    GetProjectbyId,
    GetBusinessProjects
} = require('./controllers')

const {
    decodeToken,
} = require('../auth/jwtService')

router.post('/create', decodeToken ,  createProject)
router.get('/:id', decodeToken  , GetProjectbyId)
router.get('/business/:id', decodeToken , GetBusinessProjects)

module.exports = router 