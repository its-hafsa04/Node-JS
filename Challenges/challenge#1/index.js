//challenge 1
const fs = require("fs");

//1.create folder
//fs.mkdirSync("Hafsa");

//2.create file
//fs.writeFileSync("bio.txt", "I am hafsa sajid");

//3.add text in file
//fs.appendFileSync("bio.txt", " i am a student");

//4.read dat without buffer data
//const data = fs.readFileSync("bio.txt");
//const org_data = data.toString();
//console.log(org_data);

//5.rename file
//fs.renameSync("bio.txt", "mybio.txt");

//6.delete file
//fs.unlinkSync("mybio.txt");

//7.delete folder
fs.rmdirSync("Hafsa");