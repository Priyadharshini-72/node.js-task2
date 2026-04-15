const express=require('express');
const app=express();
app.use((req,res,next)=>{
    res.on('finish',()=>{
        console.log("triggered")
        const time=new Date();
        console.log(`${req.method}${req.url}-${res.statusCode}-${time}`);
    })
    next();
})
app.get('/api/products',(req,res)=>{
    res.json({message:"Server working"});
});
app.use((req,res)=>{
    res.status(404).json({error:"Route not found"})
})
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})