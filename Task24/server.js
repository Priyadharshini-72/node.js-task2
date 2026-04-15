const express=require("express");
const app=express();
app.use(express.json());
app.use((req, res, next) => {
    console.log("Request logged");
    next();
});
app.get("/",(req,res) => {
    res.json({ message:"Application running successfully" });
});
app.listen(3000,()=>{
    console.log("Server is running on port 3000"); 
});