const http=require('http');
let totalRequests=0;
let successCount=0;
let errorCount=0;
let totalTime=0;
const server=http.createServer((req,res)=>{
    const start=Date.now();
    totalRequests++;
    if (req.url==="/hello"){
        const delay=Math.floor(Math.random()* 400)+100;
        setTimeout(()=>{
            successCount++;
            const time=Date.now()-start;
            totalTime+=time;
            res.end("Hello");
        },delay);
    }
    else if(req.url==="/fail"){
        errorCount++;
        const time=Date.now()-start;
        totalTime+=time;
        res.statusCode=500;
        res.end("Error");
    }
    else if(req.url==="/stats"){
        const avg=totalRequests?(totalTime/totalRequests).toFixed(0):0;
        res.setHeader("Content-Type","application/json");
        res.end(JSON.stringify({
            totalRequests,
            successCount,
            errorCount,
            avgResponseTime:avg +"ms"
        }));
    }
    else {
        res.end("Route not found");
    }

});
server.listen(3000,()=>console.log("Server running on port 3000"));