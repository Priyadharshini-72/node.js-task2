const express=require("express");
const app=express();
app.use(express.json());
function validate(req,res,next) {
    const {name,email }=req.body;
    if (!name||!email) {
        return res.status(400).json({error:"Name and email are required" });
    }
    next();
}
app.post("/user",validate,(req,res)=>{
    res.json({ message:"Valid user",data:req.body });
});
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});