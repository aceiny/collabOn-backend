const {Schema , model } = require('mongoose')

const ChatSchema = new Schema({
    messages : [{
        type : Schema.Types.ObjectId,
        ref : 'Message'
    }],
    business : {
        type : Schema.Types.ObjectId,
        ref : 'Business'
    },
},{timestamps : true})

module.exports = model('Chat',ChatSchema)