const http=require('http');
const server= http.createServer((req, res) => {
    if (req.method==="POST" && req.url==="/orders") {
        let body= "";
        req.on('data',chunk => {
            body+= chunk.toString();
        });
        req.on('end',()=> {
            console.log("RAW BODY:", body);
            if (!body || body.trim()=== "") {
                res.writeHead(400);
                return res.end("Empty body");
            }
            let order;
            try {
                order=JSON.parse(body);
            } catch(err) {
                res.writeHead(400);
                return res.end("Invalid JSON");
            }
            if (!order.item||!order.qty||!order.userId) {
                res.writeHead(400);
                return res.end("Invalid Order");
            }
            setTimeout(()=>{
                setTimeout(()=>{
                    res.writeHead(200, {
                        "Content-Type": "application/json"
                    });
                    res.end(JSON.stringify({
                        orderId: "ORD-1001",
                        status: "confirmed",
                        trackingId: "TRK-5001",
                        emailSent: true
                    }));
                }, 300);
            }, 300);
        });
    } else {
        res.end("Route not found");
    }
});
server.listen(3000,()=> {
    console.log("Server running on port 3000");
});