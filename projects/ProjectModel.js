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
        ref : 'Worker'
    },
    workers : [{
        type : Schema.Types.ObjectId ,
        ref : 'Worker'
    }],
    tasks : [{
        type : Schema.Types.ObjectId ,
        ref : 'Task'
    }],
    business : {
        type : Schema.Types.ObjectId ,
        ref : 'Business'
    },
    budget: { type: Number , default : 0},
    tags: [{ type: String }],

})
module.exports = model('Project', projectSchema);