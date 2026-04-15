const EventEmitter=require('events');
const event=new EventEmitter();
event.on('ProductAdded',(name)=>{
    console.log("Product saved to database");
})
event.on('ProductAdded',(name)=>{
    console.log("Email notification sent");
})
event.on('ProductAdded',(name)=>{
    console.log("Inventory updated");
    console.log("Product name:",name)
})
event.emit("ProductAdded","laptop")