import mongoose from 'mongoose'
const UserSchema = new mongoose.Schema({
    status: {
        type: String,
        required: true,
        enum:['admin','user']
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },

})
export  const User = mongoose.model('user', UserSchema)
