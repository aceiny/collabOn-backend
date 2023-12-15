const {Schema, model} = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new Schema({
    name : {
        type : String ,
    },
    email : {
        type : String
    },
    password : {
        type : String
    },
    role : {
        type : String ,
        enum : ['worker','owner'],
        default : 'worker'
    },
    business : {
        type : Schema.Types.ObjectId ,
         ref : 'Business'
        }
    })

UserSchema.pre('save', async function(next){
    const user = this;
        user.password = await bcrypt.hash(user.password, 8);
    next();
})
module.exports = model('User', UserSchema);