const http=require("http");
const server=http.createServer((req,res)=>{
    console.log("The request method is",req.method);
    console.log("The request URL is ",req.url);
    res.end("Response received  successfully");
})
server.listen(3000,()=>console.log("server port 3000 running"));