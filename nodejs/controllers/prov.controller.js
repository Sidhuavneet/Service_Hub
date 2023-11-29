const path=require("path");
var provfx=require('../models/axios.provm');
var provs=provfx();

async function Psave(req,resp)
{
    var p=path.join(__dirname,"..","uploads",req.files.id.name);
    req.files.id.mv(p);
    req.body.id=req.files.id.name;
    var client=provs(req.body);
    await client.save().then((res)=>{
        resp.send(res);
    }).catch((e)=>{console.log(e);})
}
async function Pfetch(req,resp) {
    await provs.find({em:req.query.em}).then((res)=>{
        resp.send(res);
    }).catch((e)=>{console.log(e);})
}
async function up1(req,resp){
    await provs.updateOne({em:req.query.em},{$set:{n:req.query.n,cn:req.query.cn,a:req.query.a,c:req.query.c,cat:req.query.cat,expi:req.query.expi,oa:req.query.oa,ai:req.query.ai,exp:req.query.exp}}).then((res)=>{
        resp.send(res);
    }).catch((e)=>{console.log(e);})
}
async function up2(req,resp) {
    var p=path.join(__dirname,"..","uploads",req.files.id.name);
    req.files.id.mv(p);
    req.body.id=req.files.id.name;
    await provs.updateOne({em:req.body.em},{$set:{n:req.body.n,cn:req.body.cn,a:req.body.a,c:req.body.c,cat:req.body.cat,expi:req.body.expi,oa:req.body.oa,ai:req.body.ai,exp:req.body.exp,id:req.files.id.name}}).then((res)=>{
        resp.send(res);
    }).catch((e)=>{console.log(e);})
}
async function discat(req,resp){
    await provs.distinct("cat").then((res)=>{resp.send(res)}).catch((e)=>{console.log(e);})
}
async function discit(req,resp){
    await provs.distinct("c").then((res)=>{resp.send(res)}).catch((e)=>{console.log(e);})
}
async function srchprov(req,resp){
    console.log(req.body);
    await provs.find({cat:req.body.c1 ,c:req.body.c2}).then((res)=>{resp.send(res)}).catch((e)=>{console.log(e);})
}

module.exports={Psave,Pfetch,up1,up2,discat,discit,srchprov};