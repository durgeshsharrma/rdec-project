const express = require('express');
const router = express.Router();
const student = require('../models/student')

//Home Route where Allstudents
router.get("/home" ,async (req , res) => {
    let students = await student.find({});
    console.log(students);
    res.render("students/home" , {students});
})

//To add new form render
router.get("/home/new" , (req , res) => {
    res.render("students/new");
})

router.get("/home/:id" , async(req , res) => {
   let {id} = req.params;
   let findedStudent = await student.findById(id);
   res.render("students/show" , {student : findedStudent});
})



//to add new at home page
router.post("/home" ,async (req , res) => {
   let newStudent = new student(req.body.student);
  await newStudent.save().then((res) => {
    console.log(res);
  })
  res.redirect("/home");
})

module.exports = router