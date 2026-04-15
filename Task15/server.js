const express=require("express");
const app=express();
app.use(express.json());
let products=[];
app.get("/products",(req,res)=>{
    res.json(products);
});
app.post("/products", (req, res) => {
    const product = req.body;
    product.id = Date.now();  
    products.push(product);
    res.json({ message: "Product created successfully" });
});
app.put("/products/:id",(req,res)=>{
    const id=req.params.id;
    products=products.map(p => p.id == id ? req.body : p);
    res.json({ message: "Product updated successfully" });
});
app.delete("/products/:id",(req,res)=>{
    products = products.filter(p => p.id != req.params.id);
    res.json({ message:"Product deleted successfully"});
});
app.listen(3000,()=>{
     console.log("Server is running on port 3000");
}
);