//importin all requirements 
const express = require('express')
const app = express()
const socket = require('socket.io')
const connectdb = require('./db/connectdb') //db connection fonction 
const NotFound = require('./extra/notfound') //not found handler
const errhandler = require('./extra/errhandler') //err handlerc
const cookieParser = require('cookie-parser')
const cors = require('cors')
app.use(cors())
require('dotenv').config()

//middlewares
app.use(cookieParser())
app.use(express.json())
//routes 
app.use('/auth', require('./auth/routes'))
app.use('/business', require('./business/routes'))
app.use('/projects', require('./projects/routes'))
app.use('/tasks' , require('./task/routes'))
app.use('/messages' , require('./messages/routes'))
app.use('/chat', require('./chat/routes'))
//handelers
    app.use(NotFound) //handle wrong route pathes
    app.use(errhandler) //handle server errs
//start the server 
const port = process.env.PORT || 3033
const start = async () => {
    try {
        await connectdb(process.env.MONGO) // connect to db
        app.listen(port , console.log('listenin on port ' + port ))

    }catch(err) {
        console.log(err)
    }
}
const io = socket(3032 , {
    cors : {
        origin : '*'
    }
})
io.on('connection' , (socket) => {
    console.log('connected')
    socket.on('join' , ({room}) => {
        socket.join(room)
    })
    socket.on('message' , ({room , message}) => {
        io.to(room).emit('message' , message)
    })
    socket.on('disconnect' , () => {
        console.log('disconnected')
    })
})
start()