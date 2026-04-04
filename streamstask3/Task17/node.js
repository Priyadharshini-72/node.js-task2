const http=require('http');
http.createServer((req,res)=>{
    const start=Date.now();
    let responseText="";
    if (req.url==='/') {
        responseText="Home Page";
    } else if (req.url==='/api') {
        responseText="API Route";
    }
    const time=Date.now()-start;
    res.writeHead(200,{
        'X-Powered-By': 'Node.js',
        'X-Response-Time': time + 'ms',
        'Content-Type': 'text/html'
    });
    console.log(res.getHeaders());
    res.end(responseText);
}).listen(3000);