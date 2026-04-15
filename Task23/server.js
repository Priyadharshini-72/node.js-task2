const express=require("express");
const app=express();
const productRouter=express.Router();
productRouter.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});
productRouter.get("/", (req, res) => {
    res.json({ message: "Products working" });
});
app.use("/products", productRouter);
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});