const express=require("express");
const app=express();

const products=[{name:"Laptop",category:"Electronics"},
    {name:"Phone",category:"Electronics"},
    {name:"Shoes",category:"fashion" }
];
app.get("/search",(req,res)=>{
    let {name,category}=req.query;
    let result=products;
    if (name)result=result.filter(p=>p.name.includes(name));
    if (category)result=result.filter(p=>p.category===category);
    res.json({
        resultCount:result.length,
        result
    });
});
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});