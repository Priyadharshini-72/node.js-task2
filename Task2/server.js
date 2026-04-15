const express=require('express');
const app=express();
app.get('/',(req,res)=>{
    console.log("Home accessed");
    res.status(200).json({route:"home",message:"welcome",time:new Date()});
});
app.get('/about',(req,res)=>{
    console.log("About accessed");
    res.status(200).json({route:"about",message:"About",time:new Date()});
});
app.get('/contact',(req,res)=>{
    console.log("contact  accessed");
    res.status(200).json({route:"contact",message:"contact",time:new Date()});
});
app.use((req,res)=>{
    console.log("Use method accessed");
    res.status(404).json({error:"Route not found"});
});
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});