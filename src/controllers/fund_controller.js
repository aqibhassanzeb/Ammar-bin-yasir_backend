import { fundAmount } from "../models/totalFund.js"
import bycrypt from 'bcryptjs'
import jwt from "jsonwebtoken";

export const fundCreat = async(req, res) => {
    const { total_amount } = req.body
    if (!total_amount) {
        return res.status(422).json({ error: "please fill the amount " })
    }
    try {
        const fund = new fundAmount({
            total_amount })
          const result= await fund.save()
        res.status(200).json({ message: "created successfully " })
    } catch (error) {
         res.status(422).json({ error: "somethings went wrong!" })
    }      
}

export const fundControl = async(req, res) => {
    const { amount,fund_id,amount_status} = req.body
    if (!amount || !fund_id || !amount_status) {
        return res.status(422).json({ error: "please fill the amount " })
    }
    
    try {
        let result = await fundAmount.findById({ _id: fund_id })
        let newAmount;
        let Amount =Number(amount)
        if(amount_status==="add"){
         newAmount=Number(result.total_amount+Amount ) 
        }else{
         newAmount=Number(result.total_amount-Amount ) 
        }
       let result2= await fundAmount.findByIdAndUpdate({_id: fund_id},{total_amount:newAmount})
       console.log("result 2 :",result2)
        res.status(200).json({ message: "updated successfully ",status:true })

    } catch (error) {
         res.status(422).json({ error: "somethings went wrong!",status:false})
    }
       
}

export const fundshow = async(req, res) => {
    try {
          const result= await fundAmount.findOne()
        res.status(200).json({ status:true,fund_data:result })
    } catch (error) {
         res.status(422).json({ error: "somethings went wrong!" })
    }      
}