const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http.createServer((req,res)=>{
    const path = url.parse(req.url).pathname;

    switch(path)
    {
        case "/":
            res.end("Hy Main page");
        break;
        case "/user":
            res.end("User page");
        break;
        default :
            res.end("hy");
        break;
    }
});

server.listen(3000,'127.0.0.1',()=>{
    console.log("runing...");
});