const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    gender: String,
    dateOfBirth: Date,
    nationality: String,
    address: String,
    email: String,
    phone: String,
    admissionDate: Date,
    courses: String,
  });
  
  const Student = mongoose.model('Student', studentSchema);

  module.exports = Student