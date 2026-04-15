const EventEmitter=require('events');
const fs=require('fs');
const emitter=new EventEmitter();
emitter.on('dataReceived',async(data)=>{
    console.log("dataReceived →", data);
    if (data.value!==undefined) {
        console.log("dataValid → validation passed");
        emitter.emit('dataValid',data);
    } else {
        console.log("dataInvalid → validation failed");
    }
});
emitter.on('dataValid', async(data)=>{
    data.value=data.value*2;
    console.log("dataProcessed →",data);
    emitter.emit('dataProcessed',data);
});
emitter.on('dataProcessed',async(data)=>{
    fs.writeFile('result.txt', JSON.stringify(data), (err) => {
        if (err) {
            console.log("Error saving file");
            return;
        }
        console.log("dataSaved → written to result.txt");
    });
});
emitter.emit('dataReceived',{ id: 1, value: 42 });