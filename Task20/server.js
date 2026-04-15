const express=require("express");
const app=express();
app.use(express.json());
app.get("/users",(req,res)=>{
    res.json({ message:"Users API working" });
});
app.get("/products",(req,res)=>{
    res.json({ message: "Products API working" });
});
app.get("/orders",(req,res)=>{
    res.json({ message: "Orders API working" });
});
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});