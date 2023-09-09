const http = require('http');
const fs = require('fs');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res)=>{
    console.log(req.url);
    res.setHeader('Content-Type','text/html');
    if(req.url == '/'){
        res.statusCode  = 200;
        const data = fs.readFileSync('index.html');
        res.end(data.toString());
    }
    else if(req.url == '/apd'){
        res.statusCode  = 200;
        res.end('<h1>This is Anurag</h1> <p>Hey this is the way to rock the world!</p>');
    }
    else if(req.url == '/about'){
        res.statusCode  = 200;
        res.end('<h1>About Anurag</h1> <p>Hey this is about page!</p>');
    }
    else{
        // res.anurag();
        res.statusCode  = 404;
        res.end('<h1>Not Found</h1> <p>Hey this was not found on this server.</p>');
        
    }
})

server.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);
}) 
