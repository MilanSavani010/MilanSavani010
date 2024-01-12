const express = require('express');
const app = express();


app.set('view engine','ejs');
app.set('views','./views');

/*
Middleware functions are functions that have access to 
the request object (req), the response object (res), 
and the next middleware function in the application’s 
request-response cycle.
*/

//Middleware functions
const logMiddleware = (req, res, next)=>{
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next(); // Call the next middleware in the stack

};

app.use(logMiddleware);

// Define a route for the root path
app.get('/',(req,res)=>{
    res.send('Hello, Express!');
});

app.get('/about',(req,res)=>{
    res.send('About Page');
});



// Start the server
const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});