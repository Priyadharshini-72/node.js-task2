const express=require("express");
const app=express();
app.get("/error",(req,res)=>{
    throw new Error("Something went wrong");
});
app.use((err,req,res,next)=>{
    res.status(500).json({error:err.message });
});
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});