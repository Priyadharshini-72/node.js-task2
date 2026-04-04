const { Readable }=require('stream');
const stream=new Readable({
    read() {}
});
stream.push("Line1:Hello\n");
stream.push("Line2:World\n");
stream.push("Line3:Done\n");
stream.push(null);
stream.on('data',(chunk)=>{
    console.log("Chunk received:",chunk.toString());
});
stream.on('end',()=>{
    console.log("Stream ended");
});