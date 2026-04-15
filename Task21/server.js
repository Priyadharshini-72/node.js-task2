const express=require("express");
const app=express();
app.use(express.json());
let orders=[];
app.get("/orders",(req,res)=>{
    res.json(orders);
});
app.post("/orders",(req,res)=>{
    const order=req.body;
    if (!order.product||!order.quantity) {
        return res.status(400).json({ error: "Invalid order" });
    }
    orders.push(order);
    res.json({
        orderId: Date.now(),
        product: order.product,
        quantity: order.quantity
    });
});
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});