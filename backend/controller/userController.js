import { asyncHandler } from "../utils/asynchandler.js";
import bcrypt from 'bcrypt';


import User from "../models/userModal.js";
import generateToken from "../utils/generateToken.js";

export const resgisterUser=asyncHandler(async (req, res)=>{
    try {
        const { name, email, password, dept, isAdmin, procurement } = req.body;

        // Validate input
        if (!name || !email || !password || !dept) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Check if the department is valid
        const validDepts = ["Warehouse", "Maintenance", "Production", "Silo"];
        if (!validDepts.includes(dept)) {
            return res.status(400).json({ message: 'Invalid department' });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already in use' });
        }

        // Hash the password
        //const hashedPassword = await bcrypt.hash(password, 10);

        // Save user to the database
        const newUser = new User({
            name,
            email,
            password,
            dept,
            isAdmin: isAdmin || false, // Use provided value or default
            procurement: procurement || false, // Use provided value or default
        });

       const savedUser= await newUser.save();

       const userResponse = {
        id: savedUser._id,
        name: savedUser.name,
        email: savedUser.email,
        dept: savedUser.dept,
        isAdmin: savedUser.isAdmin,
        procurement: savedUser.procurement,
        createdAt: savedUser.createdAt,
        updatedAt: savedUser.updatedAt,
    };

    const token = generateToken(res, savedUser._id);

    if(savedUser){
        generateToken(res, savedUser._id);
        res.status(201).json({
            message: 'User registered successfully',
            user: userResponse,
            token:token
        })
    }

 
    } catch (err) {
        console.error(err);
        res.status(400);
    throw new Error("invalid data try again");
    }
})


export const signIn = asyncHandler(async (req, res) => {
    console.log('Request Body:', req.body);
    const { email, password } = req.body;
    console.log('email', email)
    console.log('password', password)
  
    const user = await User.findOne({ email });

    console.log('Found User:', user);
  
    if (user && (await user.comparePassword(password))) {
      const token = generateToken(res, user._id);
  
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        dept: user.dept,
        isAdmin: user.isAdmin,
        procurement: user.procurement,
        token: token,
      });
    } else {
      res.status(401);
      throw new Error("invalid Email And Password !!");
    }
  });