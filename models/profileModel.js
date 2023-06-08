const mongoose=require('mongoose');

const profileSchema=mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User',


    },
    name:{
        type:String,
        required:[true,'Please fill the profile name']
    },
    email:{
        type:String,
        required:[true,'Please fill the email address']
    },
    phone:{
        type:String,
        required:[true,'Please fill the phpne number']
    },
    about:{
        type:String
    },
    age:{
        type:String
    },
    sex:{
        type:String,
        required:[true,'Please fill your sex']
    },
    education:{
        type:String
    },
    occupation:{
        type:String
    },
    skills:{
        type:String
    }
    
},{
    timestamps:true,
})

module.exports=mongoose.model("Profile", profileSchema);