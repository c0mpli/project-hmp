const mongoose=require("mongoose");

const partnerSchema=new mongoose.Schema({
    // userId: {
    //     type: String,
    //     required: true,
    //   },
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
    address: {
        type: String,
        required: true,
    },
    specialization:{
        type:String,
        required:true,
    },
    experience: {
        type: String,
        required: true,
    },
    feePerConsultation: {
        type: Number,
        required: true,
    },
    timings : {
      type: Array
      //required: true,
      
    }
    
},
{
    timestamps: true,
}
);


module.exports=mongoose.model("Partner",partnerSchema);