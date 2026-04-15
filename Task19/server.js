const express=require("express");
const app=express();
const adminRouter=express.Router();
adminRouter.use((req,res,next)=>{
    const token = req.headers.token;
    if (token!=="admin123") {
        return res.status(401).json({ message:"Unauthorized" });
    }
    next();
});
adminRouter.get("/dashboard",(req, res)=> {
    res.json({ message: "Access granted to admin dashboard" });
});
app.use("/admin", adminRouter);
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});