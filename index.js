/*
  HiredHelp - A Node module that allows you to create worker functions to perform tasks placed into a queue
  
  created by Wyatt Calandro
  Copyright (c) 2015 Wyatt Calandro
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
*/

// Underscore makes our lives easier
var under = require("underscore");

// Create the worker object
var worker = function(interval){
  if(!under.isNumber(interval)) throw new Error("Argument must be an integer representing how often the worker will check for work (in milliseconds)");
  this._interval = interval;
  this._workList = {};
  this._postWork = {};
  this._workQueue = [];
};

// Declare prototype functions to start and stop the worker
worker.prototype.startWorker = function(){
  var wFunc = function(){
    if(this._workQueue.length < 1) return;
    var job = this._workQueue[0];
    
    this._workList[job['name']].apply(null, job.args);
      
    this._workQueue.splice(0, 1);
    /*async.parallel([function(callback){
        this._workList[job['name']].apply(null, job.args);
        callback();
      }.bind(this)], function(){
      this._workQueue.splice(0, 1);
      this._doingWork = false;
    }.bind(this));*/
  };
  this._intervalFunction = setInterval(wFunc.bind(this), this._interval);
};
worker.prototype.stopWorker = function(){
  clearInterval(this._intervalFunction);
};

// Declare prototype functions to deal with work objects
worker.prototype.createWork = function(workname, workfunction){
  if(!under.isString(workname)) throw new Error("First argument must be a string! Got a " + typeof workname);
  if(!under.isFunction(workfunction)) throw new Error("Second argument must be a function! Got a " + typeof workfunction);
  this._workList[workname] = workfunction;
};
worker.prototype.perform = function(){
 if(arguments.length == 0) throw new Error("This method requires at least one argument!");
 var workfunc = this._workList[arguments[0]];
 if(under.isFunction(workfunc)){
   var args = [].splice.call(arguments,1);
   this._workQueue.push({
    name: arguments[0],
    args: args
   });
   //workfunc.apply(this, args);
 }else{
   throw new Error("Work \"" + arguments[0] + "\" doesn't exist!");
 }
};
module.exports = worker;