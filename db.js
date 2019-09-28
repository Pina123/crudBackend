const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://pinaki_123:pinaki_123@cluster0-wkcuh.mongodb.net/CrudDB?retryWrites=true&w=majority",(err)=>{
    if(!err)
    {
        console.log("===Connected with mongo db===")
    }else{
        console.log("error occured in connection");
    }
})

module.exports=mongoose;