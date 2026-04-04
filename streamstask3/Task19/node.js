const http=require('http');
const fs=require('fs');
http.createServer((req, res) => {
    if (req.url==='/csv') {
        res.writeHead(200, {
            'Content-Type':'text/csv',
            'Content-Disposition': 'attachment; filename=data.csv'
        });
        fs.createReadStream('data.csv').pipe(res);
    }
}).listen(3000);