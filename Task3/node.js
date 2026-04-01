const fs=require('fs');
function watchAndProcess(filename) {
    fs.watchFile(filename,{interval:1000},()=>{
        console.log(`File changed:${filename}`);
        console.log("Reading file...");
        fs.readFile(filename,'utf8',(err,data)=>{
            if(err){
                console.error("Error reading file:",err);
                return;
            }
            let lines=data.split('\n');
            let filtered=lines.filter(line=>line.trim()!== "");
            let removed=lines.length - filtered.length;
            console.log(`Parsing ${lines.length} lines,${removed} empty removed`);
            fs.writeFile('output.txt', filtered.join('\n'),(err) => {
                if(err){
                    console.error("Error writing file:", err);
                    return;
                }
                console.log("Saved to output.txt");
            });
        });
    });
}
watchAndProcess('data.txt');