![HiredHelp](http://i58.tinypic.com/2ez19g7.jpg)  
A Node module that allows you to create worker functions to perform tasks set by the user

Tips
====
As a free software developer, tips are appreciated. I am in no way poor, and this isn't going to a specific cause, however if you want to show your appreciation for my work, this is one way to do it.

[Tip with ChangeTip](http://arm1stice.tip.me)

Installation
============
```bash  
$ npm install hiredhelp
```

Usage
=====
### RequireJS  
```js
var help = require("hiredhelp");
```  
### Creating a worker   
Create a new object with the only argument being the interval (in milliseconds) that you want the worker to check for new work.
```js
var worker = new help(1000); // Check for new work every 1000 milliseconds
```  
### Starting/Stopping worker  
This is pretty straightforward
```js
worker.startWorker(); // Starts worker
worker.stopWorker(); // Stops worker
```
### Creating work  
Work is a premade function that is stored by the worker and can be called using the .perform() command
```js
worker.createWork("name for work", function(){
    // Put what you want in here
});
```
### Performing work  
To perform work, just call .perform() with the first argument being the name of the work you want to call
```js
worker.perform("name of work");
```
### Passing arguments to work
If your tasks needs to accept arguments, just allow for the needed variables in the work function, and when using .perform(), place the required arguments after the name of the work
```js
worker.createWork("add", function(number1, number2){
    console.log(number1 + number2);
});
worker.perform("add", 3, 4); // Logs 7 to console
```
You can pass other functions too! 
```js
worker.createWork("say", function(text, callback){
    callback(text);
});
worker.perform("say", "Hello", function(words){
    console.log(words); // Prints "Hello" to console
});
```

Contributing
============
If you have a basic change, just create a pull request, and I will take a look at it.
If you have an idea for a new feature, create an and label it as an enhancement

License
=======
HiredHelp is available under the MIT License, a copy of which is available in LICENSE.

Tell me where you use HiredHelp!
================================
If you decide to use hiredhelp in one of your projects, be sure to create an enhancement issue with the details and I will add it here!




