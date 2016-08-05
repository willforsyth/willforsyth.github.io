---
layout: post
title: ES2015 - let and const
comments: false
published: true
category: javascript
description: |
  Whats different with the new let
---

Some useful information I have found on the new let and const functionality. I have started using this and converting it with [babel](https://babeljs.io/) to es3 however this loses all the nice features its provided. But at least its future proofing.


## let

You can only declare each let name once.

{% highlight javascript %}

let dog = "harvey";

{% endhighlight %}


#### Temporal Dead zone
You can not call a let before its been created
{% highlight javascript %}

function doSomething(){
    console.log(dog);  // Logs undefined
    let dog = "Harvey";
    console.log(dog); // Logs harvey
}

{% endhighlight %}

#### Let creates a block scoped variable

{% highlight javascript %}

  let dog = "Harvey";

  if(true) {
    let dogNew = "Rosie";  
  }

  console.log(dog); // logs Harvey
  console.log(dogNew); // logs Not defined as the let is inside a block

{% endhighlight %}


#### Let in for loops

When using let in a for loop its not accessible outside the loop and is scoped to the block. The same principle as above.

{% highlight javascript %}

  for(var i = 0; i < 10; i++){
    console.log(i) // Logs 0 - 9
  }

  for(let j = 0; i < 10; i++){
    console.log(j) // Logs 0 - 9
  }

  console.log(i) // Logs 0 - 9
  console.log(j) // Logs undefined as the let is inside a block


{% endhighlight %}

## Const

You can't reassign to a const variable.
Its scoped the same as let lexically inside curly braces.

{% highlight javascript %}

  const dog = "harvey";
  dog = "rosie"; // You cant reassign to a const

{% endhighlight %}
