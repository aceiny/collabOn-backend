const jwt = require('jsonwebtoken');

const generateToken = (id) => {
    const token = jwt.sign({id},process.env.JWT_SECRET,{expiresIn : '1d'})
    return token
}
const decodeToken = (req,res,next) => {
    try {
        const {token} = req.cookies
        if(!token) return res.status(401).json({message:'please login first' , data : null , status : 401})
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        req.user = decoded
        next()
    }
    catch (err) {
        return res.status(401).json({message:'invalide token' , data : null , status : 401})
    }
}

const checkToken = (req,res) => {
    try {
        const {token} = req.cookies
        if(!token) return res.status(401).json({message:'please login first' , data : null , status : 401})
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        return res.status(200).json({message:'token is valid' , data : decoded , status : 200})
    }
    catch (err) {
        return res.status(401).json({message:'invalide token' , data : null , status : 401})
    }

}

module.exports =  {decodeToken , generateToken,checkToken};