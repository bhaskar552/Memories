const mongoose = require("mongoose");
const colors =require("colors")
const ConnectDB =async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected to Mongodb DataBase`.bgMagenta.white);

    }catch(error){
        console.log(`MONGO Connect Error`.bgRed.white);
    }
};
module.exports=ConnectDB;