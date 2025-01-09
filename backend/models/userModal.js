

import mongoose from "mongoose";
import bcrypt from 'bcrypt';

const userSchema=mongoose.Schema({
        name:{
            type:String,
            required:true,
            trim:true
        },
        email: { type: String, required: true, unique: true },

        password:{
            type:String,
            required:true
        },
        dept:{
            type:String,
            required:true,
            enum:{
                values:["Warehouse", "Maintenance", "Production", "Silo"],
                message:"Please add user dept"
            }
        },
        isAdmin:{
            type:Boolean,
            required:true,
            default:false
        },
        procurement:{
            type:Boolean,
            required:true,
            default:false
        }
    },
        {
            timestamps:true
        }
        
);


userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
      return next();
    }
  
    const salt = await bcrypt.genSalt(10);
  
    this.password = await bcrypt.hash(this.password, salt);
    next()
  });
  
  userSchema.methods.comparePassword = async function (password) {
    const result = await bcrypt.compare(password, this.password);
  
    return result;
  }

const User=mongoose.model("User", userSchema);
export default User