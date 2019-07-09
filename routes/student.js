const express = require("express");
const router = express.Router();

const Student = require("../models/Student");

//route: http://localhost:5000/addStudent
//desc: add new Student
router.post("/addStudent", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const photo = req.body.photo;
    const enrNb = req.body.enrNb;

    const newStudent = new Student({
        name,
        email,
        photo,
        enrNb
    });

    newStudent
        .save()
        .then(saved => res.json(saved))
        .catch(err => console.log(err));

});

//route: http://localhost:5000/addToPresent/id
//desc: add presence day to a Student
router.put("/addToPresent/:id", (req, res) => {
    Student
        .findByIdAndUpdate(
            req.params.id,
            { $set: { ...req.body } },
            { new: true }
        )
        .then(updated => res.json(updated))
        .catch(err => console.log(err));
});

//route: http://localhost:5000/deleteStudent/id
//desc: delete Student
router.delete("/deleteStudent/:id", (req, res) => {
    Student
        .findOne({ _id: req.params.id }, (err, student) => {
            if (student)
                student
                    .remove()
                    .then(deleted => res.json({
                        message: "Student successfully deleted!"
                    }))
                    .catch(err => console.log(err));
            else res.json({
                message: "Student not found!"
            })
        })
        .catch(err => console.log(err));
});

//route: http://localhost:5000/getAllStudents
//desc: get all Students
router.get("/getAllStudents", (req, res) => {
    Student
        .find()
        .then(students => res.json(students))
        .catch(err => console.log(err));
});

module.exports = router;