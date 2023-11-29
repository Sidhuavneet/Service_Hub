var express=require("express");
var cont=require("../controllers/user.controller");
var clnt=require("../controllers/client.controller");
var mid=require("../middleware/yomiddleware");
var app=express.Router();

app.post("/sign-with-query",mid.chklist,cont.qSign);
app.post("/login-with-post",mid.chklog,cont.qlog);
app.get("/get-user-with-token",mid.decTok,cont.userget);
app.post("/client-with-pic",clnt.Cdetails);
app.get("/client-get-detailss",clnt.getC);
app.get("/upclient-only-text",clnt.upText);
app.post("/client-up-apic",clnt.upTextApic);
app.post("/client-up-all",clnt.UpClAll);
module.exports=app;