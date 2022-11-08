const mongoose = require("mongoose");
const Student_Schema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: [true, "Email Already Present!"],
  },
  phone: {
    type: Number,
    min: 10,
    require: true,
    unique: true,
  },
  address: {
    type: String,
    require: true,
  },
});

// Model Creation
const Student = new mongoose.model("Student", Student_Schema);
module.exports = Student;
