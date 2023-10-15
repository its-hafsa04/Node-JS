const EventEmitter = require('events');

const event = new EventEmitter();
//pass event
/*event.on("myName",()=>{
    console.log("your name is hafsa");
});
event.on("myName",()=>{
    console.log("your name is sajid");
});
event.on("myName",()=>{
    console.log("your name is hafsa");
});
//create event
event.emit("myName");*/

event.on('checkPage', (sc,msg)=>{
    console.log(`the status of page is ${sc} and the page is ${msg}`);
});

event.emit('checkPage',200, 'ok');