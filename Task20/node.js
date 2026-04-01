const http = require('http');
http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");
    if (req.url==="/users") {
        res.end(JSON.stringify({ users: ["Arun","Priya","Kiran"] }));
    }
    else if (req.url=== "/products") {
        res.end(JSON.stringify({ products: ["Laptop","Phone","Tablet"] }));
    }
    else {
        res.statusCode = 404;
        res.end(JSON.stringify({error: "Not found" }));
    }
}).listen(3000);