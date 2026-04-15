const express=require('express');
const app=express();
const students=[{id:1,name:"priya",course:"CSE",age:20},{id:2,name:"Ramya",course:"ECE",age:21},
    {id:3,name:"Suresh",course:"EEE",age:20}];
    app.use('/students',(req,res,next)=>{
        console.log("Student API accesses");
        next();
    });
    app.get('/students',(req,res)=>{
        res.status(200).json(students)
    });
    app.get('/students/count',(req,res)=>{
        res.status(200).json({total:students.length});
    });
    app.get('/students/names',(req,res)=>{
        res.status(200).json(students.map(s=>s.name));
    });
    app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});