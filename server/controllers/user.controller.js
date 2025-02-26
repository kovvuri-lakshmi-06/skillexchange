import {User }from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/generatToken.js";

export const register=async(req,res)=>{
    try {
        const{name,email,password}=req.body;
        if(!name||!email||!password){
            return res.status(400).json({
                sucess:false,
                message:"All fields are required."
            })
        }
        const user= await User.findOne({email});
        if(user){
            return res.status(400).json({
                sucess:false,
                message:"User alredy exist with this email."
            })
        }
        const hashedPassword=await bcrypt.hash(password,10);
        await User.create({
              name,
              email,
              password:hashedPassword
        });
        return res.status(201).json({
            success:true,
            message:"Acoount sucessfully created"
        })
    } catch (error) {
        console.log(error);
        return res.ststus(500).json({
            sucess:false,
            message:"Failed to register"
        })
    }
}
export const login=async(req,res)=>{
    try {
        const{email,password}=req.body;
        if(!email||!password){
            return res.status(400).json({
                sucess:false,
                message:"All fields are required."
            })
        }
        const user= await User.findOne({email});
        if(!user){
            return res.status(400).json({
                sucess:false,
                message:"Incorrect email or password."
            })
        }
        const isPasswordMatch=await bcrypt.compare(password,user.password);
        if(!isPasswordMatch){
            return res.status(400).json({
                sucess:false,
                message:"Incorrect email or password."
            })
        }
        generateToken(res,user,`Welcome back${user.name}`)
       
    } catch (error) {
        console.log(error);
        return res.ststus(500).json({
            sucess:false,
            message:"Failed to register"
        })
    }
}