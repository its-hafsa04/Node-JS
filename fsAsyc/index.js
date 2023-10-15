const fs = require("fs");

//create file
/*fs.writeFile("read.txt", "I am hafsa", (err)=> {
    console.log('file is created');
});*/

//add text
//fs.appendFile('read.txt', " hello i am a student", (err) =>{
//console.log('text added');
//});

//read data
fs.readFile('read.txt',"UTF-8", (err, data) =>{
    console.log(data);
});