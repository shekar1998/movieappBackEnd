import mongoose from "mongoose";
import bcrypt from 'bcryptjs'

const LoginSchema = new mongoose.Schema(
{	
    name : {
        type: String
    },
    email :{
        type: String
    },
    password : {
        type: String
    },
    role :  {
        type : String,
        enum: ['admin', 'user', 'customer','Customer', 'User', 'CUSTOMER', 'USER']
    },
    category: {
         type: Array,
    }
}
);

LoginSchema.pre('save', async function (next) {
    // @ts-ignore
    this.password = await bcrypt.hash(this.password, 12);
    // @ts-ignore
    next()
});

LoginSchema.methods.correctPassword = async function (candidatePassword, userPassword) {
    return await bcrypt.compare(candidatePassword, userPassword);
  };

const loginModel = mongoose.model("login", LoginSchema);

export default loginModel;
