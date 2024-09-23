const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const studentSchema = new Schema({
    name : {
        required : true,
        type: String
    },
    rollNo : {
        required:true,
        type : Number,
        
    },
    phoneNo  : {
        type :Number,
        required : true
    },
    fathersName : {
        type : String,
        required : true
    }
})


module.exports = mongoose.model("rdstudent" , studentSchema);