const express=require("express");
const bodyParser=require("body-parser");

const { mongoose }=require('./db.js');

var employeeController=require('./Controller/emplyeeController.js');

var app=express();

app.use(bodyParser.json());
var p="pinaki";


app.listen(3000,()=>console.log("server started at :3000"));

app.use('/employees',employeeController);