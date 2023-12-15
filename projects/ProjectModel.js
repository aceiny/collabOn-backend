const {Schema , model} = require('mongoose');

const projectSchema = new Schema({
    name : {
        type : String ,
    },
    description : {
        type : String ,
    },
    business : {
        type : Schema.Types.ObjectId ,
        ref : 'Business'
    },
    projectLeader : {
        type : Schema.Types.ObjectId ,
        ref : 'User'
    },
    workers : [{
        type : Schema.Types.ObjectId ,
        ref : 'User'
    }],
    business : {
        type : Schema.Types.ObjectId ,
        ref : 'Business'
    },
    budget: { type: Number , default : 0},
    tags: [{ type: String }],
    Tasks : [{
        type : Schema.Types.ObjectId ,
        ref : 'Task'
    }]

})
module.exports = model('Project', projectSchema);