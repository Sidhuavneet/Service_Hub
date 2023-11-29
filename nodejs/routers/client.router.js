var express=require("express");
var app=express.Router();
var clnt=require("../controllers/client.controller");

app.post("/post-req",clnt.reqpost);

module.exports=app;