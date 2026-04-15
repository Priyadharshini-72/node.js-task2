function withTimeout(promise,ms,name) {
    return Promise.race([
        promise,
        new Promise((_, reject) =>
            setTimeout(() => reject(`${name} timed out`), ms)
        )
    ]);
}
const tasks=[
    withTimeout(new Promise(res=>setTimeout(()=>res("fetch1"),400)),1000,"fetch1"),
    withTimeout(new Promise(res=>setTimeout(()=>res("fetch2"),1200)),1000,"fetch2"),
    withTimeout(new Promise(res=>setTimeout(()=>res("fetch3"),800)),1000,"fetch3"),
    withTimeout(new Promise(res=>setTimeout(()=>res("fetch4"),2500)),1000,"fetch4"),
    withTimeout(new Promise(res=>setTimeout(()=>res("fetch5"),600)),1000,"fetch5")
];
Promise.allSettled(tasks).then(results=>{
    const fulfilled=[];
    const timedOut=[];
    results.forEach((result,index)=>{
        if (result.status==="fulfilled") {
            fulfilled.push(result.value);
        } else {
            timedOut.push(`fetch${index + 1}`);
        }
    });
    console.log("Fulfilled:",fulfilled.join(", "));
    console.log("Timed out:",timedOut.join(", "));
});