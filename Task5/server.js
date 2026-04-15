const express=require('express');
const app=express();
const products=[{id:101,name:"Laptop",price:50000,category:"Electronics"},{id:102,name:"phone",price:20000,category:"Electronics"},
    {id:103,name:"Shoes",price:500,category:"Clothing"},{id:104,name:"Book",price:200,category:"Education"},
    {id:105,name:"Shirt",price:500,category:"Fashion"},{id:106,name:"Headphone",price:200,category:"Electronics"}
];
app.get('/api/products',(req,res)=>{
    console.log("Products API called");
    const sorted=products.sort((a,b)=>a.name.localeCompare(b.name));
    res.status(200).json({totalProducts:products.length,data:sorted});
})
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})