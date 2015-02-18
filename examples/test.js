/*
    HiredHelp Example
*/

// Import the lib
var index = require("../index.js");

// Create a worker that will run every 1000 milliseconds (1 second)
var worker = new index.Worker(1000);

// Start the worker
worker.startWorker();

// Create a piece of work that accepts 3 arguments: the first two being the numbers to add together, and the third being a callback function
worker.createWork("add", function(n1, n2, callback){
    callback(n1 + n2);
});
//Run the new type of work, passing 1 and 4 to be added together, and a callback function to log the result
worker.perform("add", 1, 4, function(addition){
    console.log(addition);
});

// After 4 seconds, stop the worker
setTimeout(function(){
    worker.stopWorker();
}, 4000);