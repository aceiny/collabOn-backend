const User = require('./UserModel')
const bycrypt = require('bcryptjs')
const Business = require('../business/BusinessModel')
const {generateToken} = require('./jwtService')

const emailExists = async(email) => {
    const exist = await User.findOne({email : email})
    if(exist) return true
    return false
}

const Signup =  async(req,res) =>{
    const {name , password , email , role  } = req.body
    if(!name || !password || !email) return res.status(400).json({message:'please fill all the fields' , date : null , status : 400})
    if(await emailExists(email)) return res.status(400).json({message:'email already exists' , date : null , status : 400})
    const user = await User.create({
            name,
            password,
            email,
            role,

        })
        if(!user) return res.status(500).json({message:'something went wrong' , date : null , status : 500})
        const token = generateToken(user._id)
        res.cookie('token',token,{httpOnly:false})
        return res.status(200).json({message:'user created' , data : token , status : 200})
        }
const Login = async(req,res) => {
    try{
    const {email , password} = req.body
    if(!email || !password) return res.status(400).json({message:'please fill all the fields' , date : null , status : 400})
    const user = await User.findOne({email})
    if(!user) return res.status(400).json({message:'email or password is wrong' , date : null , status : 400})
    const isMatch = await bycrypt.compare(password,user.password)
    if(!isMatch) return res.status(400).json({message:'email or password is wrong' , date : null , status : 400})
    const token = generateToken(user._id)
    res.cookie('token',token,{httpOnly:false})
    return res.status(200).json({messsge:'logged in' , data : token, status : 200})
    }catch(err){
        console.log(err)
    }  
}
module.exports = {Signup , Login } 