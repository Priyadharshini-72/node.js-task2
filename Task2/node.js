const http=require('http');
let activeRequests=0; 
const queue=[];         
let requestId=1;
function processRequest(req,res,id) {
    activeRequests++;
    console.log(`Request ${id}: processing`);
    setTimeout(()=>{
        console.log(`Request ${id}: done`);
        res.end(`Request ${id} completed`);
        activeRequests--;
        if (queue.length > 0) {
            const next=queue.shift();
            processRequest(next.req, next.res, next.id);
        }

    }, 1000);
}
const server=http.createServer((req,res)=>{
    const id=requestId++;
    if (activeRequests<2) {
        processRequest(req,res,id);
    } else{
        console.log(`Request ${id}:queued`);
        queue.push({ req,res,id });
    }

});
server.listen(3000,() => {
    console.log("Server running on port 3000");
});