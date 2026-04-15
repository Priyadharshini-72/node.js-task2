const http=require('http');
const server=http.createServer((req,res)=>{
    if (req.method==="POST" && req.url==="/process") {
        let body="";
        req.on('data', chunk => {
            body+ chunk.toString();
        });
        req.on('end',()=>{
            try {
                const obj=JSON.parse(body);
                if (!obj.name || !obj.age || !obj.email) {
                    res.writeHead(400);
                    return res.end("Validation Failed");
                }
                obj.name=obj.name.toUpperCase();
                obj.email="xyz@gmail.com";
                const response = {
                    success: true,
                    data: obj
                };
                res.writeHead(200, { "Content-Type": "application/json" });
                res.end(JSON.stringify(response));
            } catch (err) {
                res.writeHead(400);
                res.end("Invalid JSON");
            }

        });
    } else {
        res.end("Route not found");
    }
});
server.listen(3000,()=>{
    console.log("Server running on port 3000");
});