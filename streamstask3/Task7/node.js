const http=require("http");
const server=http.createServer((req,res)=>{
    console.log("Headers Received:",req.headers);
    res.end("Check console")
})
server.listen(3000,()=>console.log("server is running on port 3000"))