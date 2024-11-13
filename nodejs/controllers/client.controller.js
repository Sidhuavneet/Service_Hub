const path=require("path");
var clfx=require("../models/axios.clientm");
var cls=clfx.ClientAxios();
var clr=clfx.ClientReq();
async function Cdetails(req,resp)
{
    var p1=path.join(__dirname,"..","uploads",req.files.apic.name);
    req.files.apic.mv(p1);
    req.body.adpic=req.files.apic.name;
    var p2=path.join(__dirname,"..","uploads",req.files.cpic.name);
    req.files.cpic.mv(p2);
    req.body.clpic=req.files.cpic.name;
    var client=cls(req.body);
    await client.save().then((res)=>{
        console.log("Client data Saved");
        resp.send(res);
    }).catch((e)=>{
        console.log(e);
    })
    console.log("Done with Client");
}
async function getC(req,resp)
{
    await cls.find({em:req.query.em}).then((res)=>{
        resp.send(res);
    }).catch((e)=>{
        resp.send(e);
    })
}
async function upText(req,resp)
{
    await cls.updateOne({em:req.query.em},{$set:{n:req.query.n,m:req.query.m,a:req.query.a,c:req.query.c}}).then((res)=>{
        console.log(res);
        resp.send(res);
    }).catch((e)=>{
        resp.send(e);
    })
}
async function upTextApic(req,resp)
{
    var p1=path.join(__dirname,"..","uploads",req.files.apic.name);
    req.files.apic.mv(p1);
    req.body.adpic=req.files.apic.name;
    console.log("reached.........");
    await cls.updateOne({em:req.body.em},{$set:{n:req.body.n,m:req.body.m,a:req.body.a,c:req.body.c,adpic:req.files.apic.name}}).then((res)=>{
        console.log(res);
        resp.send(res);
    }).catch((e)=>{
        resp.send(e);
    })
}
async function upTextClpic(req,resp)
{
    var p1=path.join(__dirname,"..","uploads",req.files.cpic.name);
    req.files.cpic.mv(p1);
    req.body.clpic=req.files.cpic.name;
    await cls.updateOne({em:req.body.em},{$set:{n:req.body.n,m:req.body.m,a:req.body.a,c:req.body.c,clpic:req.files.cpic.name}}).then((res)=>{
        console.log("Done......");
        resp.send(res);
    }).catch((e)=>{
        resp.send(e);
    })
}
async function UpClAll(req,resp)
{
    var p1=path.join(__dirname,"..","uploads",req.files.apic.name);
    req.files.apic.mv(p1);
    req.body.adpic=req.files.apic.name;
    var p2=path.join(__dirname,"..","uploads",req.files.cpic.name);
    req.files.cpic.mv(p2);
    req.body.clpic=req.files.cpic.name;
    await cls.updateOne({em:req.body.em},{$set:{n:req.body.n,m:req.body.m,a:req.body.a,c:req.body.c,adpic:req.files.apic.name
        ,clpic:req.files.cpic.name}}).then((res)=>{
        console.log(res);
        resp.send(res);
    }).catch((e)=>{
        resp.send(e);
    })
}
async function reqpost(req,resp){
    console.log(req.body);
    var creq=clr(req.body);
    await creq.save().then((res)=>{resp.send(res)}).catch((e)=>{console.log(e);})
}
async function getReq(req,resp){
    await clr.find().then((res)=>{resp.send(res)}).catch((e)=>{console.log(e);})
}
async function getCat(req,resp){
    await clr.distinct('cat').then((res)=>{resp.send(res)}).catch((e)=>{resp.send(e)});
}
module.exports={Cdetails,getC,upText,upTextApic,upTextClpic,UpClAll,reqpost,getReq,getCat}