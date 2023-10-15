const fs = require("fs");

//create new file
//fs.writeFileSync("read.txt", "welcome to my page");

//fs.appendFileSync("read.txt", " hey how are you :)");

const buf_data = fs.readFileSync("read.txt");
org_data = buf_data.toString();
console.log(org_data);

//buffer is additional data type in node.js,
// use to store binary data
//<Buffer 77 65 6c 63 6f 6d 65 20 74 6f 20 6d 79
 //20 70 61 67 65 68 65 79 20 68 6f 77 20 61 72 65 20 79 6f 75 20 3a 29>

 //rename file
 fs.renameSync("read.txt", "readWrite.txt");