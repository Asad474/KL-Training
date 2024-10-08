// Nodejs is neither programming language nor framework.
// It is just a run time enviromnent that allows js code to execute outside the browser.
// With the introduction, we can create backend server in js with the help of nodejs.
// URL(Uniform Resource Locator)
// Status Codes:
// 200 - Ok
// 400 - Client Side Error
// 500 - Server Side Error

// Using nodejs for creating web server involves following steps:
// 1) npm init: package json file is created automatically.
// 2) For running js file, we need to type node index.js
// 3) For running scripts, go to package json file, 
// "scripts": {
//     "dev or server": "node index.js"
//   },
// 4) Run npm run dev or npm run server.

// require is used to import other files or modules.
// Ways to import files
//1) require and module.exports
//2) import and export

// Creating nodejs http server
// Build in modules installed with nodejs
// http, fs(file system)

//Content-Type basically tells the type of response (html, json etc) generated by server.
//Content-Type has text/plain, text/html, application/json etc.
const http = require('http');

http.createServer(function(req, res) {
    console.log(req.url);
    res.writeHead(200, { "Content-Type": "text/html" });

    if (req.url === '/') {
        res.write('<h1>Hello World</h1>');
    } else if (req.url === '/login') {
        res.write('<h1>Login</h1');
    } else if (req.url === '/register') {
        res.write('<h1>Register</h1');
    } else {
        res.write('<h1>Invalid URL</h1>')
    }
    res.end();
}).listen(8000);