const User = require('./model')
const {usernameExists} = require('../auth/controllers')
const GetUsers = async (req,res) => {
    const users = await User.find({})
    if(users){
        return res.status(400).json({
            message : "Users Fetched Successfully",
            data : users,
            status : 400
        })
    }
    return res.status(500).json({
        message : "Something went wrong",
        data : null,
        status : 500
    })
}
const GetUser = async (req,res) => {
    const {id} = req.params
    const user = await User.findById(id)
    if(user){
        return res.status(400).json({
            message : "User Fetched Successfully",
            data : user,
            status : 400
        })
    }
    return res.status(500).json({
        message : "Something went wrong",
        data : null,
        status : 500
    })
}
const ChangeUsernames = async (req,res) => {
    const user = await User.findById(req.user.id)
    if(!user) return res.status(400).json({message : "No such user found",data : null,status : 400});
    const {username} = req.body
    if(!username) return res.status(400).json({message : "No username provided",data : null,status : 400});
    if(await usernameExists(username)) return res.status(400).json({message : "Username already exists",data : null,status : 400});
    user.username = username
    await user.save()
    return res.status(200).json({message : "Username changed successfully",data : null,status : 200}); 
}

module.exports = {
    GetUsers,
    GetUser,
    ChangeUsernames
}