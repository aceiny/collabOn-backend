const Chat = require('./model')
const Project = require('../projects/ProjectModel')
const AccesChat = async(req,res) => {
    try{
    const {id:ProjectId} = req.params
    const chat = await Chat.findOne({Project : ProjectId})
    const project = await Project.findById(ProjectId)
    if(!chat) {
        const chat = await Chat.create({
            Project : ProjectId,
            name : project.name 
        })
        if(!chat) return res.status(500).json({message:'something went wrong' , date : null , status : 500})
        return res.status(200).json({message:'chat created' , data : chat , status : 200})
    }
    return res.status(200).json({message:'chat accesed' , data : chat , status : 200})
    }catch(err){
        console.log(err)
        return res.status(500).json({message:'something went wrong' , date : null , status : 500})
}}
module.exports = {
    AccesChat
}