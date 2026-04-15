const EventEmitter=require('events');
const event=new EventEmitter();
event.on('userLogin',(username,time)=>{
    console.log("User Login Event Triggered");
    console.log("User:",username);
    console.log("Time:",time);
});
event.emit('userLogin','Priya','10:30 AM');
event.emit('userLogin','Ramya','10:35 AM');
