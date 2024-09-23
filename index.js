const express = require('express');
const app = express();
const connection = require('./connection.js');
const ejsMate = require('ejs-mate');
const path = require('path');
const studentRouter = require('./routes/student.js');


app.engine("ejs" , ejsMate)
app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname , "/views"));
app.use(express.static(path.join(__dirname , "/public")));
app.use(express.urlencoded({extended :  true}));


connection()
.then(() => {
    console.log("Connection successfull");
})
.catch((err) => {
    console.log(err);
})


app.use(studentRouter);


app.listen(3000 , (err) => {
    if(err){
        console.log(err)
    }
    else{
        console.log("server has started at port 3000");
    }
})



