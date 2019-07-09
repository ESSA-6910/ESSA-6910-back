const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
    enrNb: {
        type: String,
        required: true
    },
    presence: {
        type: Boolean,
        default: false
    }
});

module.exports = Student = mongoose.model("student", StudentSchema);