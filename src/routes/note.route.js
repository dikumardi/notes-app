const express = require("express");
const noteModel = require("../model/notes.model");
const { default: mongoose } = require("mongoose");

const router = express.Router();

router.post("/create", async (req, res) => {
  const { title, description } = req.body;

  const notes = await noteModel.create({ title, description });
  res.status(201).json({
    message: "Note Created Succesfully",
    notes,
  });
});

router.get('/read', async(req,res) => {
    
    const notes = await noteModel.find()
    
    res.status(200).json({
        message:"Notes Fetched Successfully",
        notes
    })
})

router.delete('/delete/:id', async(req,res) => {
    const noteId = req.params.id
    const notes = await noteModel.findByIdAndDelete({
        _id:noteId
    })

    res.status(201).json({
        message:"Note Deleted Successfully"
    })
})

router.patch('/update/:id', async(req,res) => {
    const noteId = req.params.id
    const {title,description} = req.body

    const notes = await noteModel.findOneAndUpdate(
        {_id:noteId}, {title:title,description:description})

        res.status(200).json({
            message:"Note updated Successfully",
            notes
        })
})

module.exports = router;
