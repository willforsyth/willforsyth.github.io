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
