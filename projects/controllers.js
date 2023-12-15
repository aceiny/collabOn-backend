const Project = require('./ProjectModel');
const ProjectOverview = require('./ProjectOverviewModel');
const Business = require('../business/BusinessModel');
const User = require('../auth/UserModel');
const { Types } = require('mongoose');
const CanCreateProject = async (b) => {
    const business = await Business.findById(b);
    console.log(business.projects.length)
    if (business.projects.length >= 3) return false;
    return true;

}

const createProject = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        if(! await CanCreateProject(user.business)) return res.status(400).json({ message: 'checkout premuim to create more then three projects ', date: null, status: 400 });
        const { name, description, business , projectLeader , tags , budget } = req.body;
        if (!name || !description || !projectLeader) return res.status(400).json({ message: 'please fill all the fields', date: null, status: 400 });
        const info = {
            name,
            description,
            projectLeader,
            tags,
            budget,
            business : user.business
            }
            console.log(info)
        const project = await Project.create(info);
        if (!project) return res.status(500).json({ message: 'something went wrong', date: null, status: 500 });
        const businessT = await Business.findById(user.business);
        console.log(businessT)
        businessT.projects.push(project.id);
        await businessT.save();
        return res.status(200).json({ message: 'project created', data: project, status: 200 });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: 'something went wrong', date: null, status: 500 });
    }
}
const GetProjectbyId = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id)
        if (!project) return res.status(500).json({ message: 'project not found', date: null, status: 500 });
        return res.status(200).json({ message: 'project fetched', data: project, status: 200 });
    } catch (err) {
        console.log(err);

    }
}

const GetBusinessProjects = async(req,res) => {
    try {
        const {id} = req.params
        const projects = await Project.find({business : id})
        if(!projects) return res.status(500).json({message:'something went wrong' , date : null , status : 500})
        return res.status(200).json({message:'projects fetched' , data : projects , status : 200})
    }catch(err){
        console.log(err)
    }
}
module.exports = { createProject, GetProjectbyId , GetBusinessProjects }