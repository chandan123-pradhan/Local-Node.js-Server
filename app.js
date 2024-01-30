const http=require('http');

// const server=http.createServer((request, response)=>{
//     response.end("Hello Welcome To The Dart Place.")
//     console.log("A New Request Recived");
//     console.log(request);
// });



//getting a html file content and sending to the server
const fs=require('fs');

let html=fs.readFileSync('./Templetes/index.html','utf-8');
let products=JSON.parse(fs.readFileSync('./Data/products.json','utf-8')).products
let productListHtml=fs.readFileSync('./Data/product_list.html','utf-8');

let productHtmlArray=products.map((prod)=>{
    let output=productListHtml.replace('{{%NAME%}}',prod.name);
    output=output.replace('{{%BRAND%}}',prod.brand);
    output=output.replace('{{%PRICE%}}',prod.price);
    output= output.replace('{{%CATEGORY%}}',prod.category);
   
    return output;
})

const server=http.createServer((request, response)=>{
    // response.end(html) //sending index.html file content to the server
    let path=request.url;
    let message='';
    switch(path.toLowerCase()){
        case '/':
            response.writeHead(200,{
                'content-type':'text/html',
                'custom-header':'Hello World'
            });
            message='You are on home page';
            response.end(message);
            break;
        case '/home':
            response.writeHead(200,{
                'content-type':'text/html',
                'custom-header':'Hello World'
            });
            message='You are on home page';
            response.end(message);
            break;
        case '/about':
            response.writeHead(200,{
                'content-type':'text/html',
                'custom-header':'Hello World'
            });//setting status code.
            message='You are on about section page';
            response.end(message);
            break;
            case '/products':
                response.writeHead(200,{
                    'content-type':'text/html',
                });//setting status code.
                // response.end('you are in product page');
                let productRes=html.replace('{{%CONTENT%}}',productHtmlArray.join(','))
                response.end(productRes);
                console.log(productRes);
                break;
        default:
            response.writeHead(404);
            message='Not Found';
            response.end(message);
            break;
            
    }
    

});

server.listen(8001,'127.0.0.1',()=>{
    console.log("Server has started");
});

