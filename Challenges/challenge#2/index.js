const fs = require("fs");

//create folder
/*fs.mkdir("hafsa",(err)=>{
    console.log('folder created');
});*/

//create file
/*fs.writeFile('read.txt', "hey it's me there",(err)=>{
    console.log("file created");
});*/

//add text
/*fs.appendFile('read.txt', "hello",(err)=>{
    console.log('text is added');
});*/

//rename file
/*fs.rename('read.txt', 'readMe.txt',(err)=>{
    console.log('file renamed');
})*/

//delete file
/*fs.unlink("readMe.txt", (err)=>{
    console.log("folder is deleted");
})*/

//delete folder
fs.rmdir("hafsa", (err) =>{
    console.log('folder deleted');
});