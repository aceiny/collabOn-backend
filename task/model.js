const {Schema , model} = require('mongoose')

const TaskSchema = new Schema({
    TaskName : {
        type : String,
        required : true,
    },
    TaskDescription : {
        type : String,
        required : true,
    },
    TaskStatus : {
        type : String,
        default : 'pending',
    },
    TaskDuration : {
        type : String,
        required : true,
    },
    TaskPriority : {
        type : String,
        required : true,
    },
    TaskType : {
        type : String,
        required : true,
    },
    TaskTags : [{
        type : String,
        required : true,
    }],
    TaskBudget : {
        type : String,
        required : true,
    },
    TaskWorker : {
        type : Schema.Types.ObjectId,
        ref : 'User',
    },
    TaskProject : {
        type : Schema.Types.ObjectId,
        ref : 'Project',
    },
    Archived : {
        type : Boolean,
        default : false,
    }
})

module.exports = model('Task' , TaskSchema)