import mongoose from 'mongoose';
export const db=async ()=>{
    try{
        const link=await mongoose.connect(process.env.MONGO_URI)
        console.log(`db connected successfully ${link.connection.host}`)
    }
    catch(error){
        console.log(error.message)
    }
}