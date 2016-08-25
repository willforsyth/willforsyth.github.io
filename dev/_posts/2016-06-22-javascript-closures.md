---
layout: post
title: Closures in javascript
comments: false
published: true
category: javascript
description: |
  Javascript closures
---

### Working with closures

A closure returns a function from within a function. The inner function retains access to the scope. It has reference to a variable from its parents environment. The best thing about a closures is that it allows us to access functions from within other functions by exposing the content we need.

> Closures create private functions that we can make accessible or not its up to you

#### Simple example

{% highlight javascript %}

  var closureExample = function(){
      var num = 0;
      var result = function(){
        console.log(++num);
    };
    return result
  }

  // store the function in a variable to access it later. This allows it to retain its lexical scope.
  var thisIsTheClosure = closureExample();

  // invoke the function using its variable name and brackets
  thisIsTheClosure()

{% endhighlight %}

Each time the "thisIsTheClosure()" is invoked the function will run and it will remember each iteration. So the console will log, 1 then 2, then 3 etc. Where as if we did not create a closure and just called for closureExample() it would always log the value 1. This is because it creates a new instance each time and can't "remember" past calls. Each time you run "thisIsTheClosure()" its running "return result" each time so this allows you to update "var num" each time.


#### Multiple functions within one closure using methods 

This closure allows us to contain multiple function and call them separately. To do this we store the functions in an object so they become methods. Then we can call them individually.

{% highlight javascript %}
  function counter(){
    var n = 0;
    return {
      count: function() {return ++n;},
      reset: function() { n = 0; }
    };
  };

  var myCounter = counter();

  // How to access the functions within the closure
  myCounter.count();
  myCounter.reset();

{% endhighlight %}
