console.log("Sync");
process.nextTick(()=>console.log("nextTick"));
Promise.resolve().then(()=>console.log("Promise"));
setTimeout(()=>console.log("setTimeout"), 0);
setImmediate(()=>console.log("setImmediate"));
require('fs').readFile(__filename,()=>console.log("I/O"));