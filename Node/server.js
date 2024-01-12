const http = require('http');
const {greet} = require('./modules/utils')

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Hello, Node.js Server!');
    greet();
});



const PORT = 3000;
server.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`Sum of numbers: ${sum}`);

});