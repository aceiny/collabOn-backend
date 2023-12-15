const User = require('../auth/UserModel')
const Business = require('./BusinessModel')

const createBusiness = async (req,res) => {
    try{
        const {name , description , owner , industry , CompanySize} = req.body
        if(!name || !description || !industry  || !CompanySize) return res.status(400).json({message:'please fill all the fields' , date : null , status : 400})

        const business = await Business.create({
            name,
            description,
            industry,
            CompanySize,
            owner

        })
        if(!business) return res.status(500).json({message:'something went wrong' , date : null , status : 500})
        const user = await User.findById(owner)
        console.log(user)
        user.business = business._id
        await user.save()
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
const GetBusiness = async (req,res) => {
    try{
        const user = await User.findById(req.user.id)

        const business = await Business.findById(user.business)
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
const updateBusiness = async (req, res) => {
    try {
        const { id: businessId } = req.params;
        console.log(businessId);
      const { name, description, industry, CompanySize, location } = req.body;
  
      // Check if at least one field is provided for update
      if (!name && !description && !industry && !CompanySize && !location) {
        return res
          .status(400)
          .json({
            message: 'Please provide at least one field to update',
            data: null,
            status: 400,
          });
      }
  
      const updatedBusiness = await Business.findByIdAndUpdate(
        businessId,
        {
          ...(name && { name }),
          ...(description && { description }),
          ...(industry && { industry }),
          ...(CompanySize && { CompanySize }),
          ...(location && { location }),
        },
        { new: true } 
      );
  
      if (!updatedBusiness) {
        return res
          .status(404)
          .json({ message: 'Business not found', data: null, status: 404 });
      }
  
      return res
        .status(200)
        .json({ message: 'Business updated', data: updatedBusiness, status: 200 });
    } catch (err) {
      console.error(err);
      return res
        .status(500)
        .json({ message: 'Something went wrong', data: null, status: 500 });
    }
  };
  
module.exports = {createBusiness, GetBusiness , GetBusinessbyId , updateBusiness}