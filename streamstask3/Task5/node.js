const http=require("http");
const server=http.createServer((req,res)=>{
    if(req.url==="/")
    {
        res.end("Welcome to my Node Server");
    }
    else if(req.url==="/about"){
        res.end("This Server is built using Node.js")
    }
})
server.listen(3000,()=>console.log("server port 3000 is running"));