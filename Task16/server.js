const express=require("express");
const app=express();
app.use(express.json());
let posts=[];
app.get("/posts",(req,res)=>{
    res.json(posts);
});
app.post("/posts", (req, res) => {
    posts.push(req.body);
    res.json({ message: "Post created" });
});
app.put("/posts/:id", (req, res) => {
    posts[req.params.id] = req.body;
    res.json({ message: "Post updated" });
});
app.delete("/posts/:id", (req, res) => {
    posts.splice(req.params.id, 1);
    res.json({ message: "Post deleted" });
});
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
}
);