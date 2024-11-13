const path=require("path");
var webtoken=require("jsonwebtoken");
var Sfx=require("../models/axios.model");
var schm=Sfx();

async function qSign(req,resp)
{
    var user=new schm(req.body);
    await user.save().then((res)=>{
        console.log("saved sucessfully..........");
        resp.send(res);
    }).catch((e)=>{
        resp.send(e);
    })
    console.log("done and dusted..........");
}
async function qlog(req,resp)
{
    const c=await schm.find({em:req.body.em}).count();
    if(c===0)
    {
        resp.json({status:false,message:"Invalid user id"});
        return;
    }
    var user=await schm.findOne({em:req.body.em,p:req.body.p})
    if(user!=null)
    {
        var token=webtoken.sign({em:user.em,u:user.u},process.env.sec_key,{expiresIn:'1h'});
        var du=webtoken.decode(token,process.env.sec_key);
        console.log(du);
        resp.json({status:true,user,token,message:"Logged in"});
        return;
    }
    else
    {
        resp.json({status:false,message:"Invalid Password"});
        return;
    }
}
async function userget(req,resp)
{
    // console.log(req.em);
    const c=await schm.find({em:req.em}).count();
    if(c===0)
    {
        resp.json({status:false,message:"Invalid user id"});
        return;
    }
    else
    {
        var user=await schm.findOne({em:req.em});
        resp.json({status:true,message:"got the user id",user});
        return;
    }

}


module.exports={qSign,qlog,userget};