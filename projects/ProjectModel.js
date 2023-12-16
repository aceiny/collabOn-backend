const {Schema , model} = require('mongoose');
const collaborationSchema = {
    requester : {
        type : Schema.Types.ObjectId ,
        ref : 'User'
    },
    project : {
        type : Schema.Types.ObjectId ,
        ref : 'Project'
    },
    status : {
        type: String,
        enum : ['pending','accepted','rejected'],
        default : 'pending'
    }
}
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
    collaborationRequests : {
        type : [collaborationSchema]
    },
    Tasks : [{
        type : Schema.Types.ObjectId ,
        ref : 'Task'
    }],

})
module.exports = model('Project', projectSchema);