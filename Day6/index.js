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
const index2 = require('./index2')

console.log('Hello');

for (let i = 0; i < 5; i++){
    console.log(i);
}