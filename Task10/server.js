const express=require("express");
const app=express();
const items=Array.from({length: 20 },(_, i)=>({
    id:i+1,
    name:`Item${i+1}`
}));
app.get("/items",(req,res)=>{
    let page=parseInt(req.query.page)||1;
    let limit=parseInt(req.query.limit)||5;
    let start=(page-1)*limit;
    let data=items.slice(start,start+limit);
    res.json({
        page,
        limit,
        totalItems: items.length,
        data
    });
});
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});