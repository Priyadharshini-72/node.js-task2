const express=require("express");
const app=express();
function auth(req,res,next) {
    const token=req.headers.token;
    if (token!=="1234") {
        return res.status(401).json({ message:"Unauthorized access"});
    }
    next();
}
app.get("/dashboard",auth,(req,res)=>{
    res.json({ message: "Dashboard Access Granted" });
});
app.listen(3000);