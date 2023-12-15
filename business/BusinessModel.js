const {Schema, model} = require('mongoose');
const businessSchema = new Schema({
    name : {
        type : String,
    },
    description : {
        type : String,
    },
    industry : {
        type : String,
    },
    CompanySize :{
        type : Number,
        default : 1 ,
    },
    location : {
        type : String,
        default : "djelfa"
    },
    owner : {
        type : Schema.Types.ObjectId,
        ref : 'BusinessOwner'
    },
    workers : [{
        type : Schema.Types.ObjectId,
        ref : 'Worker'
    }],
    projects : [{
            type : Schema.Types.ObjectId,
            ref : 'Project'
    }],
    collaborations : [{
        type : Schema.Types.ObjectId,
        ref : 'Collaboration'
    }],
})

module.exports = model('Business', businessSchema);