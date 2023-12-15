const Message = require('./model')

const SendMessage = async(req,res) => {
    try{
    const sender = req.user.id
    const {content , chat} = req.body
    const message = await Message.create({
        sender,
        content,
        chat,
        })
    if(!message) return res.status(500).json({message:'something went wrong' , date : null , status : 500})
    return res.status(200).json({message:'message sent' , data : message , status : 200})
    }catch(err){
        console.log(err)
        return res.status(500).json({message:'something went wrong' , date : null , status : 500})
    }
}
const DeleteMessage = async(req,res) => {
    try{
    const {id} = req.params
    const message = await Message.findByIdAndDelete(id)
    if(!message) return res.status(500).json({message:'something went wrong' , date : null , status : 500})
    return res.status(200).json({message:'message deleted' , data : message , status : 200})
    }catch(err){
        console.log(err)
        return res.status(500).json({message:'something went wrong' , date : null , status : 500})
    }
}
const GetAllMessages = async(req,res) => {
    try{
    const {id} = req.params
    const messages = await Message.find({chat : id})
    if(!messages) return res.status(500).json({message:'something went wrong' , date : null , status : 500})
    return res.status(200).json({message:'messages fetched' , data : messages , status : 200})
    }catch(err){
        console.log(err)
        return res.status(500).json({message:'something went wrong' , date : null , status : 500})
    }
}
module.exports = {
    SendMessage,
    DeleteMessage,
    GetAllMessages
}