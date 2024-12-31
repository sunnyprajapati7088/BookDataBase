const express = require('express')
const router = express.Router();

const {
  addStudent,
  getStudentById,
  getAllStudent,
  deleteStudentById,
  updateStudentById,
} = require("../controller/studentController");

router.post("/", addStudent)
router.get("/:id", getStudentById);
router.get("/", getAllStudent);
router.delete("/delete/:id", deleteStudentById);
router.put("/update/:id", updateStudentById);
module.exports = router;