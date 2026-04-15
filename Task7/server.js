const express=require('express');
const app=express();
const products=[
    {id:101,name:"Laptop",price:50000},
    {id:102,name:"Phone",price:20000}
];
app.get('/products/:id',(req,res)=>{
    const id=parseInt(req.params.id);
    const product=products.find(p=>p.id===id);
    if(!product){
        return res.status(404).json({error:"Product not found"});
    }
    res.json({...product,time:new Date()});
});
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})