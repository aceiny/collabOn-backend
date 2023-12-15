const Task = require('./model')
const Project = require('../projects/ProjectModel')
const User = require('../auth/UserModel')
const Business = require('../business/BusinessModel')

const createTask = async (req, res) => {
    try {
        console.log('pinged')
        const {TaskName , TaskDescription ,TaskProject , TaskWorker , TaskTags , TaskType , TaskBudget , TaskPriority , TaskDuration } = req.body
        if(!TaskName || !TaskDescription || !TaskProject || !TaskWorker || !TaskTags || !TaskType || !TaskBudget || !TaskPriority || !TaskDuration) return res.status(400).json({message:'please fill all the fields' , date : null , status : 400})
        const user = await User.findById(req.user.id)
        const project = await Project.findById(TaskProject)
        if(project.projectLeader.toString() != user._id.toString()) return res.status(400).json({message:'you are not the project leader' , date : null , status : 400})
        const task = await Task.create({
            TaskName,
            TaskDescription,
            TaskProject,
            TaskWorker,
            TaskTags,
            TaskType,
            TaskBudget,
            TaskPriority,
            TaskDuration
        })
        if(!task) return res.status(500).json({message:'something went wrong' , date : null , status : 500})
        project.Tasks.push(task._id)
        await project.save()
        return res.status(200).json({message:'task created' , data : task , status : 200})
    }catch(err){
        console.log(err)
    }
}
const GetTaskbyId = async (req,res) => {
    try{
        const task = await Task.findById(req.params.id)
        if(!task) return res.status(500).json({message:'task not found' , date : null , status : 500})
        return res.status(200).json({message:'task fetched' , data : task , status : 200})
    }catch(err){
        console.log(err)
    }
}
const updateTask = async (req,res) => {
    try{
        const {id} = req.params
        if(!req.body) return res.status(400).json({message:'please fill all the fields' , date : null , status : 400}) 
        const task = await Task.findByIdAndUpdate(id,req.body,{new:true})
        if(!task) return res.status(500).json({message:'something went wrong' , date : null , status : 500})
        const user = await User.findById(req.user.id)
        user.lastCommits.push(`updated task ${id}`)
        await user.save()
        return res.status(200).json({message:'task updated' , data : task , status : 200})
    }catch(err){
        console.log(err)
    }
}
const getAllTasks = async (req,res) => {
    const {id} = req.params
    const project = await Project.findById(id)
    if(!project) return res.status(500).json({message:'project not found' , date : null , status : 500})
    const tasks = await Task.find({TaskProject : id , Archived : false})
    if(!tasks) return res.status(500).json({message:'something went wrong' , date : null , status : 500})
    return res.status(200).json({message:'tasks fetched' , data : tasks , status : 200})
}
const TaskDetails = async(req,res) => {
    try{
        const {id} = req.params
        const task = Task.findById(id)
        if(!task) return res.status(500).json({message:'task not found' , date : null , status : 500})
        return res.status(200).json({message:'task fetched' , data : task , status : 200})
    }catch(err){
        console.log(err)
    }
}


module.exports = {createTask , GetTaskbyId , updateTask , getAllTasks , TaskDetails}