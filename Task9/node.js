async function fetchRemoteData() {
    return new Promise(r=>setTimeout(()=>r([1,2]),600));
}
async function fetchLocalData() {
    return new Promise(r=>setTimeout(()=>r([2,3]),400));
}
async function syncData(r,l) {
    return[...new Set([...r, ...l])];
}
async function saveResult(data) {
    require('fs').writeFileSync("sync.json",JSON.stringify(data));
}
async function main() {
    const [r,l]=await Promise.all([fetchRemoteData(),fetchLocalData()]);
    const merged=await syncData(r, l);
    await saveResult(merged);
    console.log("Saved to sync.json");
}
main();