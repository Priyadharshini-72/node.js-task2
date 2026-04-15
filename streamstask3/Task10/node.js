const http=require("http");
const fs=require("fs")
const server=http.createServer((req,res)=>{
    if(req.url==="/image"){
         res.writeHead(200,{'content-type':'image/jpg'});
        fs.createReadStream('book.jpg').pipe(res);
    }
    })
server.listen(3000,()=>console.log("server is running on port 3000"))