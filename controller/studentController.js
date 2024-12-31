const Students = require("../module/studentSchema");

exports.addStudent = async (req, res) => {
  const { name, dob, courses, gpa, phone_no } = req.body;
  try {
    const newStudent = new Students({ name, dob, courses, gpa, phone_no });
    await newStudent.save();
    res.status(201).json(newStudent);
  } catch (err) {
    res.status(401).json(err);
  }
};
exports.getAllStudent = async (req, res) => {
    try {
        const allStudents = await Students.find();
        res.status(201).json(allStudents)
        
    } catch (err) {
        res.status(401).json(err)
        
    }
};
exports.getStudentById = async (req, res) => {
    try {
       const Student = await Students.findById(req.params.id);
       res.status(201).json(Student);
     } catch (err) {
       res.status(401).json(err.errmsg);
     }
};
exports.deleteStudentById = async (req,res) => {
       try {
     await Students.findByIdAndDelete(req.params.id);
       res.status(201).json("delete");
     } catch (err) {
       res.status(401).json(err);
     }

};
exports.updateStudentById = async (req, res) => {
    console.log()
     try {
        const updateStudent= await Students.findByIdAndUpdate(req.params.id, req.body, {
           new:true
       });
       res.status(201).json(updateStudent);
     } catch (err) {
       res.status(402).json(err);
     }

};
