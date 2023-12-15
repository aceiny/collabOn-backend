const Business = require('./BusinessModel')

const createBusiness = async (req,res) => {
    try{
        const {name , description , industry , CompanySize} = req.body
        if(!name || !description || !industry  || !CompanySize) return res.status(400).json({message:'please fill all the fields' , date : null , status : 400})

        const business = await Business.create({
            name,
            description,
            industry,
            CompanySize,
        })
        if(!business) return res.status(500).json({message:'something went wrong' , date : null , status : 500})
        return res.status(200).json({message:'business created' , data : business , status : 200})
    }catch(err){
        console.log(err)
    }
}
const GetBusinessbyId = async (req,res) => {
    try{
        const business = await Business.findById(req.params.id)
        if(!business) return res.status(500).json({message:'business not found' , date : null , status : 500})
        return res.status(200).json({message:'business fetched' , data : business , status : 200})
    }catch(err){
        console.log(err)
    }
}

const UpdateBusiness = async (req,res) => {
    try{
        const business = await Business.findByIdAndUpdate(req.params.id,req.body,{new:true})
        if(!business) return res.status(500).json({message:'something went wrong' , date : null , status : 500})
        return res.status(200).json({message:'business updated' , data : business , status : 200})
    }catch(err){
        console.log(err)
    }
}

module.exports = {createBusiness , GetBusinessbyId , UpdateBusiness}