const express=require("express");
const app=express();
const users = [{username:"Priya",email: "priya@mail.com",role:"student"},
    {username:"Ramya",email:"ram@mail.com",role:"admin" }
];
app.get("/users/:username",(req,res)=>{
    const user=users.find(u => u.username===req.params.username);
    if (!user){
        return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
});
app.listen(3000);