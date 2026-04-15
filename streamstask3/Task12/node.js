const EventEmitter=require('events');
const event=new EventEmitter();
event.once('serverStart',()=>{
    console.log("Server started for the first time");
})
event.on('serverStart',()=>{
    console.log("server is running");
})

event.emit("serverStart");
event.emit("serverStart");
event.emit("serverStart");