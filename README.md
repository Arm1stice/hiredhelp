![HiredHelp](http://i58.tinypic.com/2ez19g7.jpg)  
A Node module that allows you to create worker functions to perform tasks placed into a queue

Tips
====
As a free software developer, tips are appreciated. I am in no way poor, and this isn't going to a specific cause, however if you want to show your appreciation for my work, this is one way to do it.

<div class="changetip_tipme_button" data-bid="JxHYnnYsxoh42AD23AkaBP" data-uid="E3M4Wi5zWsvseCFRwQEE34"></div>

<script>(function(document,script,id){var js,r=document.getElementsByTagName(script)[0],protocol=/^http:/.test(document.location)?'http':'https';if(!document.getElementById(id)){js=document.createElement(script);js.id=id;js.src=protocol+'://widgets.changetip.com/public/js/widgets.js';r.parentNode.insertBefore(js,r)}}(document,'script','changetip_w_0'));</script>

Installation
============
```bash  
$ npm install hiredhelp
```

Usage
=====
###RequireJS
```js
var help = require("hiredhelp");
```  
###Creating a worker
Create a new object with the only argument being the interval (in milliseconds) that you want the worker to check for new work.
```js
var worker = new help(1000); // Check for new work every 1000 milliseconds
```  
###Starting/Stopping worker  
This is pretty straightforward
```js
worker.startWorker(); // Starts worker
worker.stopWorker(); // Stops worker
```
###Creating work
Work is a premade function that is stored by the worker and can be called using the .perform() command
```js
worker.createWork("name for work", function(){
    // Put what you want in here
});
```
###Performing work
To perform work, just call .perform() with the first argument being the name of the work you want to call
```js
worker.perform("name of work");
```
###Passing arguments to work
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
Note: Every time .perform() is called, the work is added to a queue, and will not be completed until previous work in the queue has been completed
--------------------------------------------------------------------------------------------------------------------------------------------------

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




