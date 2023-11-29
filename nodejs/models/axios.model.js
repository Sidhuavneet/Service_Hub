var mongoose=require("mongoose");

function SchemAxios()
{
    var schema=mongoose.Schema;
    var s=new schema({
        em:{type:String,required:true,unique:true,index:true},
        p:String,
        u:String,
        dos:{type:Date,default:Date.now},
    },{
        versionKey:false,
    })
    var userSchem=mongoose.model("Project",s);
    return userSchem;
}

module.exports=SchemAxios;