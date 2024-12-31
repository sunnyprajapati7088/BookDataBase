const mongoose = require('mongoose')



const StudentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone_no: { type: Number, required: true,unique:true },
    dob: { type: Date, required: true },
    gpa:{type:Number,required:true}

})

module.exports = mongoose.model("Students", StudentSchema);