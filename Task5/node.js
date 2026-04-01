const http=require('http');
function unstableDB(){
    return new Promise((resolve, reject)=>{
        if (Math.random()< 0.7){
            reject("DB Error");
        } else {
            resolve({source:"database",data:["A", "B", "C"]});
        }
    });
}
function fallbackData(){
    return {source: "cache",data:["X", "Y"]};
}
async function getDataWithRetry(){
    const delays=[500,1000,2000];
    for(let i=0;i<3;i++) {
        try {
            const result=await unstableDB();
            console.log(`Success on attempt ${i + 1}`);
            return result;
        } catch(err){
            if (i<2) {
                console.log(`Attempt ${i + 1} failed — retrying in ${delays[i]}ms`);
                await new Promise(res=>setTimeout(res,delays[i]));
            } else {
                console.log(`Attempt ${i + 1} failed — using fallback`);
                return fallbackData();
            }
        }
    }
}
const server=http.createServer(async(req, res)=>{
    if(req.url==="/data") {
        const result=await getDataWithRetry();
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(result));
    } else {
        res.end("Other route");
    }

});
server.listen(3004,() => {
    console.log("Server running on port 3004");
});