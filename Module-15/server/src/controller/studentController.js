const express = require('express');
const Student = require('../models/studentModel');
const studentRouter = express.Router()

studentRouter.get("/students", async (req, res) => {
    try {
    const student =  await Student.find({})
      
      res.status(200).json({success: true, student: student})
    } catch (err) {
      res.status(400).json({ success: false, error: err.message });
    }
  });
studentRouter.post("/add", async (req, res) => {
    try {
      const student = await  Student.create(req.body)
      res.json({ success: true, student });
    } catch (err) {
      res.status(400).json({ success: false, error: err.message });
    }
  });
  studentRouter.delete("/students/:id", async (req, res) => {
    try {
      const studentId = req.params.id;
  
      // Assuming you have a mongoose model named Student
      const deletedStudent = await Student.findByIdAndDelete(studentId);
  
      if (!deletedStudent) {
        return res.status(404).json({ success: false, error: "Student not found" });
      }
  
      res.json({ success: true, data: deletedStudent });
    } catch (err) {
      res.status(500).json({ success: false, error: err.message });
    }
  });
  studentRouter.put("/update/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const {
        firstName,
        lastName,
        gender,
        dateOfBirth,
        address,
        email,
        phone,
        courses,
        relationship,
        admissionDate,
      } = req.body;
  
      const updatedStudent = await Student.findByIdAndUpdate(
        id,
        {
          $set: {
            firstName,
            lastName,
            gender,
            dateOfBirth,
            address,
            email,
            phone,
            courses,
            relationship,
            admissionDate,
          },
        },
        { new: true }
      );
  
      if (!updatedStudent) {
        return res.status(404).json({ error: "Student not found" });
      }
  
      res.status(200).json(updatedStudent);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  studentRouter.get("/student/:id", async (req, res) => {
    try {
      const  id  = req.params.id;
     
      const singleStudent = await Student.find({_id: id})
      res.status(200).json(singleStudent);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });


  module.exports = studentRouter
