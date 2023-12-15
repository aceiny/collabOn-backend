const Chat = require('./model')

const AccesChat = async(req,res) => {
    try{
    const {id:businessId} = req.params
    const chat = await Chat.findOne({business : businessId})
    if(!chat) {
        const chat = await Chat.create({
            business : businessId
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