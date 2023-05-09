const mongoose= require("mongoose");

const connectDB= async()=>{
    await mongoose.connect( '', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=>{
        console.log("Database conected");
    })
    .catch(()=>{
        console.log("Database coonection Failed");
    })
}

module.exports= connectDB