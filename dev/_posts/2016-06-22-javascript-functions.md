---
layout: post
title: Functions in javascript
comments: false
published: false
category: javascript
description: |
  Different examples of functions and where to use them
---

### Constructor function

A constructor function is a function that returns an object.


### Passing functions around

Example of calling functions from within other functions and adding simple numbers
{% highlight javascript %}
  var first = 0;
        var second = 0;
        var third = 0;
        var total2 = 0;

        function num1(firstNum){
            first = firstNum;
            var total = first + first;
            console.log(total);
            num2(3);
            num3(4);
        }

        var num2 = function(secondNum){
            second = secondNum;
            console.log(first);
            var total2 = second + first;
            console.log(total2);
        }

        var num3 = function(thirdNum){
            third = thirdNum
            total3 = first + second + third;
            console.log(total3);
        }

        num1(2);
{% endhighlight %}


### Example using modules to call functions from within other functions

Copy this code to you ide and view in your browser to see the console logs.

The html

{% highlight html %}

<p>Hello world! This is HTML5 Boilerplate.</p>
<a href="#">test</a>

{% endhighlight %}

The javascript

{% highlight javascript %}

var testingFunction = (function(){
    var test2;

    function loading(e){
      testingFunctionTwo.ConsoleClick(test2);
    };

    function sausages(i){
      console.log('I am in function 1' + " " + i);
    };

    function init(){
      test2 = "I am in function 1";
      $('p').on('click', loading);
    }

    return {
      init: init,
      sausages: sausages
    }

})();

$(document).ready(testingFunction.init);

var testingFunctionTwo = (function(){
  var test;
  var test2;

  function ConsoleClick(i) {
    console.log('I am in function 2' + " " + i);
  }

  function link(e){
    console.log('I clicked in function 2 and calling a function in function 1');
    testingFunction.sausages(test);
  };

  function init(){
    test = "pressed and called from within function 2";
    test2 = "I am in function 2";
    $('a').on('click', link);
  }

  return {
    init: init,
    ConsoleClick: ConsoleClick
  }

})();

$(document).ready(testingFunctionTwo.init);

{% endhighlight %}
