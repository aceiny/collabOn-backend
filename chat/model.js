const {Schema , model } = require('mongoose')

const ChatSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    Project : {
        type : Schema.Types.ObjectId,
        ref : 'Project'
    },
},{timestamps : true})

module.exports = model('Chat',ChatSchema)