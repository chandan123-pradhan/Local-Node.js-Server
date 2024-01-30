const http=require('http');

// const server=http.createServer((request, response)=>{
//     response.end("Hello Welcome To The Dart Place.")
//     console.log("A New Request Recived");
//     console.log(request);
// });



//getting a html file content and sending to the server
const fs=require('fs');

let html=fs.readFileSync('./Templetes/index.html','utf-8');

const server=http.createServer((request, response)=>{
    response.end(html)
    console.log(request);
});

server.listen(8000,'127.0.0.1',()=>{
    console.log("Server has started");
});

