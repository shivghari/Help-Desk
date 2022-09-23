const express = require("express");
const router = express.Router();
const Complaint = require("../Models/Complaint");
const Verifytoken = require("../Middlewares/Verifytoken");

router.post("/addcomplaint",Verifytoken,async(req,res)=>{
    const complaint = new Complaint(req.body)
    try {
        const addcomplaint = await complaint.save()
        res.status(200).json(addcomplaint) 
    } catch (error) {
        console.log("error in add product.",error);
    }
})

router.put("/updatecomplaint",Verifytoken,async(req,res)=>{
    try{
        const id = req.body.id;
        const updatecomplaint = await Complaint.findByIdAndUpdate(id,req.body,{
            new:true
        });
        res.status(200).send(updatecomplaint)
    }catch(e){
        res.status(400).send(e)
    }
})

router.delete("/deletecomplaint",Verifytoken,async(req,res)=>{
    try{
        const id = req.body.id;
        const deletecomplaint = await Complaint.findByIdAndDelete(id)
        res.status(200).send(deletecomplaint)
    }catch(e){
        res.status(400).send(e)
    }
})

router.get("/publiccomplaint",Verifytoken,async(req,res)=>{
    try {
        const allcomplaints = await Complaint.find()
        res.status(200).json(allcomplaints) 
    } catch (error) {
        console.log("error in add all products",error);
    }
})

module.exports = router;