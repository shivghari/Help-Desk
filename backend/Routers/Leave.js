const express = require("express");
const router = express.Router();
const LeaveSchema = require("../Models/LeaveSchema");


router.post('/leaveRequest',async(req,res)=>{
    
    await LeaveSchema.create(req.body)
    .then((data)=>res.status(200).send(data))
    .catch((err)=>res.status(400).send(err))

})

router.get('/getLeaveRequest',async(req,res)=>{
    LeaveSchema.find()
    .then((data)=>res.status(200).send(data))
    .catch((err)=>res.status(400).send(err))
})

router.get('/getLeaveRequestByid',(req,res)=>{
    LeaveSchema.findById(req.body.id)
    .then((data)=>res.status(200).send(data))
    .catch((err)=>res.status(400).send(err))
})

router.delete('/deleteLeaveRequest',(req,res)=>{
    LeaveSchema.findByIdAndDelete(req.body.leaveID)
    .then((data)=>res.status(200).send(data))
    .catch((err)=>res.status(400).send(err))
})

router.post('/updateLeaveRequest',(req,res)=>{
    LeaveSchema.findByIdAndUpdate(req.body.id,req.body)
    .then((data)=>res.status(200).send(data))
    .catch((err)=>res.status(400).send(err))
})



module.exports = router;
