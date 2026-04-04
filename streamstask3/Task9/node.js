const http=require("http");
const fs=require("fs")
const server=http.createServer((req,res)=>{
    if(req.url==="/")
        fs.createReadStream('home.html').pipe(res);
     else if(req.url==="/about")
        fs.createReadStream('about.html').pipe(res);
    else if(req.url==="/contact")
        fs.createReadStream('contact.html').pipe(res);
        
    
    
})
server.listen(3000,()=>console.log("server is running on port 3000"))