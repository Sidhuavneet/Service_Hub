var express=require("express");
var app=express.Router();
var clnt=require("../controllers/client.controller");

app.post("/post-req",clnt.reqpost);
app.get("/get-req",clnt.getReq);
app.get("/get-cat",clnt.getCat);

module.exports=app;