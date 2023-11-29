var mongoose=require("mongoose");

function ClientAxios()
{
    var schema=mongoose.Schema;
    var s=new schema({
        em:{type:String,required:true,unique:true,index:true},
        n:String,
        m:String,
        a:String,
        c:String,
        adpic:String,
        clpic:String,
        dos:{type:Date,default:Date.now},
    },{
        versionKey:false,
    })
    var userSchem=mongoose.model("ClientProject",s);
    return userSchem;
}
function ClientReq() {
    var schema=mongoose.Schema;
    var s=new schema({
        em:String,
        cn:String,
        l:String,
        td:String,
        cat:String,
        d:Date,
        dos:{type:Date,default:Date.now},
    },{
        versionKey:false,
    })
    var userSchem=mongoose.model("ClientRequests",s);
    return userSchem;
}

module.exports={ClientAxios,ClientReq};