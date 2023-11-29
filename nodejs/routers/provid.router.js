var express=require('express');
var app=express.Router();
var pro=require('../controllers/prov.controller');
var mid=require("../middleware/yomiddleware")

app.post("/save-prov",pro.Psave);
app.get("/get-prov",pro.Pfetch);
app.get("/upnoid-prov",pro.up1);
app.post("/upid-prov",pro.up2);
app.get("/prov-cat",pro.discat);
app.get("/prov-cit",pro.discit);
// app.get("/srch-prov",pro.srchprov);

app.post("/srch-prov",mid.decTok,pro.srchprov);
module.exports=app;