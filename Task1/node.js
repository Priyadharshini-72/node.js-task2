const http=require('http');
let requestCount=0;
function logger(req,res,next) {
    console.log(`[${new Date().toLocaleTimeString()}]${req.method}${req.url}`);
    next();
}
function auth(req,res,next) {
    if (req.headers['x-auth']==='secret123') {
        console.log("Auth passed");
        next();
    } else {
        res.writeHead(401);
        res.end("Unauthorized");
    }
}
function rateLimit(req,res,next) {
    requestCount++;
    if (requestCount<=5) {
        console.log(`Rate limit: ${requestCount}/5`);
        next();
    } else {
        res.writeHead(429);
        res.end("Too Many Requests");
    }
}
const server= http.createServer((req,res)=>{
    if (req.url==="/secure") {
        logger(req,res,()=>{
            auth(req,res,()=>{
                rateLimit(req,res,()=>{
                    res.end("Response sent");
                });
            });
        });
    } else {
        res.end("Other route");
    }
});
server.listen(3000,()=>console.log("Server running"));