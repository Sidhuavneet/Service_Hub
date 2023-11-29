var jwt=require("jsonwebtoken");
function chklist(req,resp,next)
{
    if(req.query.u=="Open this select menu" || req.query.em=="" || req.query.p=="")
    {
        console.log("no no no no ");
        resp.send("nooooo");
    }
    else
        next();
}
function chklog(req,resp,next)
{
    if(req.query.em=="" || req.query.p=="")
    {
        console.log("no no no no ");
        var x="nooooo"
        resp.send(x);
    }
    else
        next();
}
function decTok(req,resp,next)
{
    const token=req.headers['authorization'];
    console.log(token);
    if(token==undefined)
    {

        resp.json({status:false,message:"No token ** received"});
        return;
    }
    var ary=token.split(' ');
    console.log(ary[1]);
    if(!token){
        resp.json({status:false,message:"No token received"});
        return;
    }
    const valid=jwt.verify(ary[1],process.env.sec_key);
    if(valid)
    {
        const user=jwt.decode(token);
        console.log(valid);
        req.em=valid.em;
        next();
    }
    else
    {
        resp.json({status:false,message:"Unauthorized"});
        return;
    }
}
module.exports={chklist,chklog,decTok}