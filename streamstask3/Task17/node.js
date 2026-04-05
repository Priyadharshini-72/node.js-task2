const http=require('http');
http.createServer((req,res)=>{
    const startTime=Date.now();
    if (req.url==='/') {
        res.writeHead(200,{
            'X-Powered-By':'Node.js',
            'X-Response-Time':`${Date.now()-startTime}ms`,
            'Content-Type': 'text/html'
        });
        res.end("Home Page");
    }
    else if (req.url==='/api') {
        res.writeHead(200,{
            'X-Powered-By': 'Node.js',
            'X-Response-Time':`${Date.now()-startTime}ms`,
            'Content-Type':'text/html'
        });
        res.end("API Route");
    }
    console.log("Response Headers Sent:");
    console.log("X-Powered-By: Node.js");
    console.log("X-Response-Time:",`${Date.now()-startTime}ms`);
    console.log("Content-Type: text/html\n");

}).listen(3000);
console.log("Server running on port 3000");