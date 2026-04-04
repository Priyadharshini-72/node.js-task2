const http=require('http');
const fs=require('fs');
const url=require('url');
http.createServer(async(req,res)=>{
    const query=url.parse(req.url,true).query;
    const name=query.name||"Guest";
    let data=await fs.promises.readFile('template.html', 'utf8');
    data = data.replace('{{username}}', name);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);

}).listen(3000);