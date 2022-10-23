const express = require("express");
const router = express.Router();
const InformationSchema = require("../Models/InformationSchema");

router.post("/postinformation",async(req,res)=>{
    try{
        const information = InformationSchema({
            title: req.body.title,
            author: req.body.author,
            desc: req.body.desc,
            image: req.body.image,
            mention: req.body.mention
        })
        const createinformation= await information.save()
        res.status(200).send(createinformation)  
    }catch(e){
        res.status(400).send(e)
    }
})

router.get("/getallinformation",async(req,res)=>{
    try{
        const allinformation = await InformationSchema.find();
        res.status(200).send(allinformation)  
    }catch(e){
        res.status(400).send(e)
    }
})

router.delete("/deleteinfromationbyid",async(req,res)=>{
    try{
        const deleteinformation = await InformationSchema.findByIdAndDelete(req.body.id)
        res.status(200).send(deleteinformation)
    }catch(e){
        res.status(400).send(e)
    }
})

module.exports = router;