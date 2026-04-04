const EventEmitter=require('events');
const event=new EventEmitter();
event.on('ProcessData',(err)=>{
    console.log("Error:",err);
})
event.on('ProcessData',(data)=>{
    console.log("Processing:",data);
    if(!data){
    event.emit("Error","Invalid data received")
}
else{
    console.log("Data processed successfully")
}
})


event.emit("ProcessData","valid data");
event.emit("ProcessData",null);