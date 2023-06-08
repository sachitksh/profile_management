const async_handler=require('express-async-handler');
const Profile=require('../models/profileModel');

const getprofile = async_handler(async(req,res)=>{

    const profiles=await Profile.find({user_id:req.user.id})
    res.status(200).json(profiless);
    
  
});
const createprofile = async_handler(async(req,res)=>{
    console.log("the request body is:",req.body);
    const {name,email,phone,about,age,sex,education,occupation,skills}=req.body;
    if(!name|| !email || !phone)
    {
        res.status(400);
        throw new Error("all fields ar mandatory")
    }
    const existingprofile = await Profile.findOne({ user_id: req.user.id });
    
    if (existingprofile) {
        res.status(400);
        throw new Error("Only one profile is allowed per user");
    }
    const profile=await Profile.create({
        name,
        email,
        phone,
        about,
        age,
        sex,
        education,
        occupation,
        skills,
        user_id:req.user.id
    });

    res.status(201).json(profile);
});

const updateprofile = async_handler(async(req,res)=>{
    const profile = await Profile.findById(req.params.id);
    if(!profile)
    {
        res.status(404);
        throw new Error("profile Not found");
    }
    if(profile.user_id.toString() !== req.user.id)
    {
        res.status(403);
        throw new Error("user dont have permission to update other users profile ")
    }


    const updated_profile=await Profile.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.status(200).json(updated_profile)
})

const deleteprofile = async_handler(async(req,res)=>{
    const profile = await Profile.findById(req.params.id);
    if(!profile)
    {
        res.status(404);
        throw new Error("profile Not found");
    }
    if(profile.user_id.toString() !== req.user.id)
    {
        res.status(403);
        throw new Error("user dont have permission to delete other users profile ")
    }
    await profile.deleteOne();
    res.status(200).json(profile);
});

const showprofile = async_handler(async(req,res)=>{
    const profile = await Profile.findById(req.params.id);
    if(!profile)
    {
        res.status(404);
        throw new Error("profile Not found");
    }
    res.status(200).json(profile);
})


module.exports={getprofile,createprofile,updateprofile,deleteprofile,showprofile};