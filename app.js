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
    // response.end(html) //sending index.html file content to the server
    let path=request.url;
    let message='';
    switch(path.toLowerCase()){
        case '/':
            response.writeHead(200);
            message='You are on home page';
            break;
        case '/home':
            response.writeHead(200);
            message='You are on home page';
            break;
        case '/about':
            response.writeHead(200);//setting status code.
            message='You are on about section page';
            break;
        default:
            response.writeHead(404);
            message='Not Found';
            break;
            
    }
    response.end(message);

});

server.listen(8000,'127.0.0.1',()=>{
    console.log("Server has started");
});

