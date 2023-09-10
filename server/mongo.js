const mongoose = require("mongoose");

  // .connect("mongodb://127.0.0.1:27017/taby")
  const connectToMongo=()=>{
    mongoose
    .connect("mongodb+srv://tabishkhan:Crazytaby123@taby.x7h2tf3.mongodb.net/taby")
    .then(() => {
      console.log("database connected");
    })
    .catch((err) => {
      console.log("database failed to connect",err);
    });
  }

  module.exports=connectToMongo;


