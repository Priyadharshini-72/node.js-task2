const http=require('http');
let jobs={};
let id=1;
function createJob() {
    const job={ id: id++, status: "queued" };
    jobs[job.id]=job;
    setTimeout(()=>job.status="running", 1000);
    setTimeout(()=>job.status="done", 3000);
    return job;
}
http.createServer((req,res)=>{
    if (req.method==="POST"&&req.url==="/jobs") {
        const job=createJob();
        res.end(JSON.stringify(job));
    } else if(req.url.startsWith("/jobs/")) {
        const jobId=req.url.split("/")[2];
        res.end(JSON.stringify(jobs[jobId]));
    } else if (req.url==="/jobs") {
        res.end(JSON.stringify(Object.values(jobs)));
    }
}).listen(3000);