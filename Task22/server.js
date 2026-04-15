const express=require("express");
const app=express();
function auth(req,res,next) {
    if (req.headers.token!=="admin") {
        return res.status(401).json({ message: "Unauthorized" });
    }
    next();
}
app.get("/admin", auth, (req, res) => {
    res.json({ message: "Welcome Admin" });
});
app.listen(3000,()=>{
    console.log("Server ios running on port 3000");
});