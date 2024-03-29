const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    password:{
        type:String,
        required:true,
    },
    firstname:{
        type:String,
        required:true,
    },
    lastname:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    mobilenum:{
        type:String,
        required:true,
    },
    admin:{
        type:Boolean,
        required:true,
    },
    superadmin:{
        type:Boolean,
        required:true,
    },
    courseprogress:{
        type:Array,
        /*
        structure:
        [
            {
                courseId,
                watchedlinks:[
                    link1,link2
                ]
               
                
            }
        ]
        */
    }
});


module.exports=mongoose.model("User",userSchema);