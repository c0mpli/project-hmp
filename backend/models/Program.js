const mongoose=require("mongoose");

const programSchema=new mongoose.Schema({
    programname:{
        type:String,
        required:true,
    },
    duration:{
        type:Number,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    videos:{
        type:Array,
    },
    
});


module.exports=mongoose.model("Program",programSchema);