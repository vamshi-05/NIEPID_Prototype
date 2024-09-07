const mongoose = require('mongoose')
const Class = new mongoose.Schema({
    classId: {
        type: String,
        required: true,
        unique: true
    },
    teacherId: {
        type: Object,
        required: true
    },
    section: {
        type: String,
        enum: ["preprimary","primary1","primary2","temp"]
    },
    year: {
        type: String,
        enum: ["1", "2", "3"],
        required: true
    },
    student: [String]
})
module.exports = mongoose.model('class', Class)