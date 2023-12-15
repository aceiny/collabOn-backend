const express = require('express')
const router = express.Router()
const  {
    createProject,
    GetProjectbyId,
} = require('./controllers')

const {
    decodeToken,
} = require('../auth/jwtService')

router.post('/create', decodeToken ,  createProject)
router.get('/:id', decodeToken  , GetProjectbyId)

module.exports = router 