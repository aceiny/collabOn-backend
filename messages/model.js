const {Schema , model } = require('mongoose')

const MessagesSchema = new Schema({
    sender : {
        type : Schema.Types.ObjectId,
        ref : 'User'
    },
    content : {
        type : String,
        required : true
    },
    chat : {
        type : Schema.Types.ObjectId,
        ref : 'Chat'
    },
},{timestamps : true})

module.exports = model('Messages',MessagesSchema)