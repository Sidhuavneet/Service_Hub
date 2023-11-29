var mongoose=require('mongoose');

function setProv()
{
    var schema=mongoose.Schema;
    var s=new schema({
        em:{type:String,required:true,unique:true,index:true},
        n:String,
        cn:String,
        a:String,
        c:String,
        cat:String,
        expi:String,
        oa:String,
        id:String,
        exp:String,
        ai:String,
        dos:{type:Date,default:Date.now},
    },
    {
        versionKey:false,
    })
    var UserSchem=mongoose.model("ProviderProject",s);
    return UserSchem;
}

module.exports=setProv;