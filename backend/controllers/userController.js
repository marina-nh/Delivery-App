import userModel from "../models/userModels.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"

// login user
const loginUser = async (req,res) => {

}

const createToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET)
}

// register user
const registerUser = async (req,res) => {
    const {name,password,email} = req.body;
    try {
        // checking is user alredy exists
        const exists = await userModel.findOne({email});
        if (exists) {
            return res.json({success:false,message:"El usuario ya existe"})
        }

        //validating email format ¬ strong password
        if (!validator.isEmail(email)) {
            return res.json({success:false,message:"Ingrese un email válido"})
        }

        if (password.length<8) {
            return res.json({success:false,message:"Ingrese una contraseña válida "})
        }

        // hasing user password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt);

        const newUser = new userModel({
            name:name,
            email:email,
            password:hashedPassword
        })

        const user = await newUser.save()
        const token = createToken(user._id)
        res.json({success:true,token});

    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

export {loginUser,registerUser}