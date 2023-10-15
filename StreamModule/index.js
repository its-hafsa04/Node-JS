const fs = require('fs');
const http = require('http');

const server = http.createServer();

server.on("request",(req,res) =>{
//1st way
/*fs.readFile("input.txt","utf-8", (err,data) =>{
    if(err) return console.log(err);
    res.end(data.thisString);
});*/

//2nd way
//const rstream = fs.createReadStream('input.txt');

/*rstream.on("data", (chunkData) =>{
res.write(chunkData);
})
rstream.on("end", () =>{
    res.end();
})
rstream.on("error", (err) =>{
    console.log(err);
    res.end("the page is not found.");
})*/

//3rd way
const rstream = fs.createReadStream('input.txt');
rstream.pipe(res);

});
server.listen(8000, "127.0.0.1");