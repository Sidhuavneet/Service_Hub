var express=require('express');
var app=express();
var mongoose=require('mongoose');
var userRouter=require('./routers/user.router');
var provRouter=require('./routers/provid.router');
var clntRouter=require("./routers/client.router");
var bp=require("body-parser")
app.use(express.json({extended:true}));
var cors=require("cors");
var bp=require("body-parser");
var fileupload=require('express-fileupload');
var env=require("dotenv");
const path = require('path');
env.config();

app.use(cors());
app.use(fileupload());
app.use("/uploads",express.static(path.join(__dirname,"uploads")));
app.use("/proj",userRouter);
app.use("/prov",provRouter);
app.use("/client",clntRouter);

app.use(bp.urlencoded({extended:true}));

app.listen(9999,()=>{
    console.log("ready for localhost 9999.......");
});
var dbCon=require("./config/dbconfig").dburl;
var dbCon=mongoose.connect(dbCon).then(()=>{
    console.log("Connected.......");
}).catch((e)=>{
    console.log(e);
    process.exit();
});