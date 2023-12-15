const { Schema, model } = require("mongoose");
const bycrypt = require('bcryptjs')

const userSchema = new Schema({
    name:String,
    username:String,
    password:String,
    email : String,
    posts : [{
        type:Schema.Types.ObjectId,
        ref:'post'
    }],
    bookmarks : [{
        type : Schema.Types.ObjectId,
        ref : 'post'
    }],
    

}, { timestamps: true });

userSchema.pre('save', async function (next) {
    try {
        const salt = await bycrypt.genSalt(10);
        const hashedPassword = await bycrypt.hash(this.password, salt);
        this.password = hashedPassword;
        next();
    } catch (err) {
        next(err);
    }
})
module.exports = model("user", userSchema);