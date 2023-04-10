import mongoose from 'mongoose'
const fundSchema = new mongoose.Schema({
    
    total_amount: {
        type: Number,
        required: true
    }
},{ timestamps: true })
export  const fundAmount = mongoose.model('totalfund', fundSchema)
