const http=require("http");
const { URL }=require("url");
http.createServer((req,res)=>{
    const myUrl=new URL(req.url, `http://${req.headers.host}`);
    const params=myUrl.searchParams;
    const query={};
    for (let [key,value] of params) {
        query[key]=value;
    }
    if (Object.keys(query).length===0) {
        res.writeHead(400,{'content-type':'text/plain'});
        res.end("No query parameters found");
        return;
    }
    console.log("Query received:");
    for (let key in query) {
        console.log(`${key}=${query[key]}`);
    }
    try {
        res.writeHead(200, { 'content-type': 'application/json' });
        res.end(JSON.stringify(query));
    } catch (err) {
        res.writeHead(500);
        res.end("Error loading the page");
    }
}).listen(3008);
console.log("Server is running on http://localhost:3008");