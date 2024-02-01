const http = require('http');

// const server=http.createServer((request, response)=>{
//     response.end("Hello Welcome To The Dart Place.")
//     console.log("A New Request Recived");
//     console.log(request);
// });



//getting a html file content and sending to the server
const fs = require('fs');
const uri = require('url');
const replaceHtml = require('./Modules/replaceHtml'); //custome module
const user = require('./Modules/user');


let html = fs.readFileSync('./Templetes/index.html', 'utf-8');
let products = JSON.parse(fs.readFileSync('./Data/products.json', 'utf-8')).products
let productListHtml = fs.readFileSync('./Data/product_list.html', 'utf-8');
let productDetailsHtml = fs.readFileSync('./Data/product_item.html', 'utf-8');


// function replaceHtml(templetes, product){
//     let output=templetes.replace('{{%NAME%}}',product.name);
//     output=output.replace('{{%BRAND%}}',product.brand);
//     output=output.replace('{{%PRICE%}}',product.price);
//     output= output.replace('{{%CATEGORY%}}',product.category);

//     return output;
// }



// const server=http.createServer((request, response)=>{
// // response.end(html) //sending index.html file content to the server
// // let path=request.url;
// // let message='';
// let {query,pathname:path}=uri.parse(request.url,true);
// switch(path.toLowerCase()){
//     case '/':
//         response.writeHead(200,{
//             'content-type':'text/html',
//             'custom-header':'Hello World'
//         });
//         message='You are on home page';
//         response.end(message);
//         break;
//     case '/home':
//         response.writeHead(200,{
//             'content-type':'text/html',
//             'custom-header':'Hello World'
//         });
//         message='You are on home page';
//         response.end(message);
//         break;
//     case '/about':
//         response.writeHead(200,{
//             'content-type':'text/html',
//             'custom-header':'Hello World'
//         });//setting status code.
//         message='You are on about section page';
//         response.end(message);
//         break;
//         case '/products':

//             if(!query.id){

//             response.writeHead(200,{
//                 'content-type':'text/html',
//             });//setting status code.
//             let productHtmlArray= products.map((prod)=>{
//                 return replaceHtml(productListHtml, prod);
//             })
//             // response.end('you are in product page');
//             let productRes=html.replace('{{%CONTENT%}}',productHtmlArray.join(','))
//             response.end(productRes);
//         }else{
//             response.writeHead(200,{
//                 'content-type':'text/html',
//             });//setting status code.
//             let productHtmlArray= products.map((prod)=>{
//                 return replaceHtml(productDetailsHtml, prod);
//             })
//             // response.end('you are in product page');
//             let productRes=html.replace('{{%CONTENT%}}',productHtmlArray.join(','))
//             response.end(productRes);
//         }

//             break;
//     default:
//         response.writeHead(404);
//         message='Not Found';
//         response.end(message);
//         break;

// }


// });



//Event Driven Architecture in NOde.js

// let myEmiter=new events.EventEmitter(); //creating event emiter class object.

let myEmiter = new user(); //creating event emiter class object.

const server = http.createServer();//creating server.

server.on('request', (request, response) => {
    response.end("Server is started");

});




server.listen(8002, '127.0.0.1', () => {
    console.log("Server is running");
});


myEmiter.on('userCreated', (name, age) => {
    console.log(`New user ${name} is created and his age is ${age}`);
})

myEmiter.on('userCreated', (name, age) => {
    console.log(`New user ${name} is added and his age is ${age}`);
})  //Its posible to create multiple event with same event name.

myEmiter.emit('userCreated', 'chandan', '22');//here chandan and 22 is parameters which we are expecting during listining.

