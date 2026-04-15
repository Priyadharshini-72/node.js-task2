async function task(id) {
    console.log(`Task ${id} started`);
    return new Promise(r=>setTimeout(()=>{
        console.log(`Task ${id} done`);
        r();
    }, 600));
}
async function limit(tasks, limit) {
    let i=0;
    async function worker(){
        while (i<tasks.length) {
            await tasks[i++]();
        }
    }
    await Promise.all(Array(limit).fill().map(worker));
}
const tasks=Array.from({ length: 5 },(_, i)=>() => task(i + 1));
limit(tasks, 2);