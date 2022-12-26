// import jwt from "jsonwebtoken"
// import bcrypt from 'bcryptjs'

// import users from '../models/auth.js' //users only create in db atlas

// export const signup = async (req,res)=>{

//     //destructuring
//     const {name,email,password}=req.body;

//     try {
//         const existingUser=await users.findOne({email}) //checking with email

//         if(existingUser){
//             return res.status(404).json({message:"User already exists"}) //404->not found
//         }

//         //hashing
//         const hashedPassword = await bcrypt.hash(password,12)
//         const newUser=await users.create({name,email,password:hashedPassword})
        
//         //generate token
//         const token=jwt.sign({email:newUser.email,id:newUser._id},"test",{expiresIn:'2h'}) //test is secret
//         res.status(200).json({result:newUser,token}) //200->ok

//     } catch (error) {
//        res.status(500).json("Something went wrong") //500->server error
//     }
// }

// export const login=async (req,res)=>{

//     const {email,password}=req.body;

//      try {
//         const existingUser=await users.findOne({email}) //checking with email

//         if(!existingUser){
//             return res.status(404).json({message:"User don't exist."}) //404->not found
//         }

//        const isPassCrct = await bcrypt.compare(password,existingUser.password) //compare original password with hashed password

//        if(!isPassCrct){
//         return res.status(400).json({message:"Invalid Credentials"})
//        }

//        //generate token for loggedin user
//         const token=jwt.sign({email:existingUser.email,id:existingUser._id},"test",{expiresIn:'2h'}) //test is secret
//         res.status(200).json({result:existingUser,token}) //200->ok

//     } catch (error) {
//        res.status(500).json("Something went wrong") //500->server error
//     }
    
// }



import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

import users from '../models/auth.js'

export const signup = async (req, res) => {
    const { name, email, password } = req.body;
    try{
        const existinguser = await users.findOne({ email });
        if(existinguser){
            return res.status(404).json({ message: "User already Exist."})
        }

        const hashedPassword = await bcrypt.hash(password, 12)
        const newUser = await users.create({ name, email, password: hashedPassword }) 
        const token = jwt.sign({ email: newUser.email, id:newUser._id},process.env.JWT_SECRET, { expiresIn: '1h'});
        res.status(200).json({ result: newUser, token })
    } catch(error){
        res.status(500).json("Something went worng...")
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const existinguser = await users.findOne({ email });
        if(!existinguser){
            return res.status(404).json({ message: "User don't Exist."})
        }

        const isPasswordCrt = await bcrypt.compare(password, existinguser.password)
        if(!isPasswordCrt){
            return res.status(400).json({message : "Invalid credentials"})
        }
        const token = jwt.sign(
          { email: existinguser.email, id: existinguser._id },
          process.env.JWT_SECRET,
          { expiresIn: "1h" }
        );
        res.status(200).json({ result: existinguser, token })
    } catch (error)  {
        res.status(500).json("Something went worng...")
    }
}