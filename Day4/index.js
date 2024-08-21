//Synchronous Javascript
// console.log('Synchronous Javascript')
// console.log('Hello');

// for (let i = 0; i < 5000; i++){
//     console.log('Loop executed.');
// }

// console.log('End');

//Asynchronous Javascript (make the code runs in parallel)
// console.log('Asynchronous Javascript')
// console.log('Hello');

// setTimeout(function(){
//     for (let i = 0; i < 5000; i++){
//         console.log('Loop executed.');
//     }
// }, 10000)
// 2000ms == 2s

// console.log('End');

//Three ways to write asynchronous javascript code
// 1) Using Callbacks
// 2) Using Promises
// 3) Using async/await

//1) Callbacks

// Without Callbacks
// function displayResult(result) {
//     console.log('Result is ', result);
// }

// function myCalc(num1, num2) {
//     let sum = num1 + num2;
//     console.log('Calc Function');
//     displayResult(sum);
// }

// myCalc(10, 20);

// With Callbacks
// Callbacks is defined as function is getting passed as paramter to another function and executed after another function completes its execution.
// function displayResult(result) {
//     console.log('Result is ', result);
// }

// function myCalc(num1, num2, cb) {
//     let sum = num1 + num2;
//     console.log('Calc Function');
//     console.log('Calling Callback');
//     cb(sum);
// }

// myCalc(10, 20, displayResult);

// Making Callback as asynchronous
// setTimeout, setInterval

// console.log('Start');

// function displayName(name) {
    // console.log('Name is ', name);

    //Passing variable directly to string in console
//     console.log(`Name is ${name}`);
// }

// setTimeout(function() {
//     displayName('Asad');
// }, 3000);

// console.log('End');

// H.W: Research about setInterval

// 2) Promises
// Why Promises
// Callback Hell: Nested callback functions getting called.

// setTimeout(function(){
//     setTimeout(function(){
//         setTimeout(function(){
//             setTimeout(function(){
//                 setTimeout(function(){
//                     console.log('H');
//                 }, 1000)
//             }, 2000)
//         }, 1000)
//     }, 2000)
// }, 1000);

// Promises
// Promises: Three things are done in promises
// 1) Pending: Task is getting performed.
// 2) Fullfilled: Promise task has been completed successfully.
// 3) Rejected: Promises task failed due to some error during the operation.

// !== works opposite to ===

// Defining Promises
const promise_function = new Promise(function(resolve, reject) {
    const check_condition = 1 === 3;

    if (check_condition) {
        // resolve gets called when promises fullfilled
        resolve('Condition Matches');
        // return 'Condition Matches';
    } else {
        // reject gets called when promises rejected
        reject('Condtion Rejected');
        // return 'Condtion Rejected';
    }
})

// Handling promises with .then and .catch
// promise_function
//     // then means promise fullfilled
//     .then(function(message) {
//         console.log('Success', message);
//     })
//     .then(function() {
//         console.log(1 + 2);
//     })
//     .then(function() {
//         console.log(3 * 4);
//     })
//     .then(function(){
//         console.log('Hello ' + 'String')
//     })

//     // catch means promise rejected
//     .catch(function(message) {
//         console.log('Error', message);
//     })


// 3) async/await: readable form of promises   
// Handling promises with async await
async function async_promises() {
    try {
        const message = await promise_function;
        console.log('Success', message);
    } catch(err) {
        console.log('Error');
    }
}

async_promises();