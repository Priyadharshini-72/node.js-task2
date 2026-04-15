const express=require("express");
const app=express();
app.use(express.json());
app.use((req,res,next)=>{
    console.log(`${req.method} ${req.url}`);
    next();
});
app.get("/users",(req,res)=>{
    res.json({message:"Users API working" });
});
app.get("/products", (req, res) => {
    res.json({ message: "Products API working" });
});
function auth(req, res, next) {
    if (req.headers.token!=="1234") {
        return res.status(401).json({ message: "Unauthorized" });
    }
    next();
}
app.get("/admin", auth, (req, res) => {
    res.json({ success: true, message: "API running successfully" });
});
app.listen(3000,()=>{
    console.log("Server is running on port 3000"); 
});