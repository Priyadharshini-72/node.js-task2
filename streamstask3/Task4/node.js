const http=require("http");
const fs=require("fs");
http.createServer((req,res)=>{
    if(req.url==="/readfile"){
        fs.readFile("file.txt",(err,data)=>{
            res.end(data);
        })
    }
    else if(req.url==='/streamfile'){
        const stream=fs.createReadStream("file.txt");
        stream.pipe(res);
    }
}).listen(3000);