const mongoose = require('mongoose')
const Url = "mongodb://127.0.0.1:27017/collegeProject";



async function connection(){
    await mongoose.connect(Url);
}


module.exports = connection;