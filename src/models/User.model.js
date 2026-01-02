const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            require:true,
            trim:true
        },
        email:{
            type:String,
            require:true,
            unique:true,
            trim:true
        },
        password:{
            type:String,
            require:true,
            minlength:6
        }
    },
    {
        timestamps:true
    }
)
const User = mongoose.model('User',userSchema)
module.exports = User