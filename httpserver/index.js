const http = require("http");
const fs = require('fs');

const server = http.createServer((req, res) =>{

   const data = fs.readFileSync(`${__dirname}/userApi/userapi.json`,"utf-8");
        const objData = JSON.parse(data);

    if(req.url == '/'){
        res.end('hello from the home side.');
    }else if(req.url == '/about'){
        res.end('hello from the about side.');
    }else if(req.url == '/contact'){
        res.end('hello from the contact side.');
    }else if(req.url == '/userapi'){
        res.writeHead(200, {"content-type": "application/json"});
res.end(objData[2].name);
        }
        
    else{
        res.writeHead(404, {"Content-type": "text/html"});
        res.end('<h1>404 error.page doesnot exist</h1>');
    }
    });

server.listen(8001, "127.0.0.1", ()=>{
    console.log('server is running on port no. 8001');
});