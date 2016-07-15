---
layout: post
title: ES6 - deconstructing
comments: false
published: false
category: javascript
description: |
  Whats different with the new let
---

### Deconstructing

This is a new way of accessing objects by using curly braces.

{% highlight javascript %}

// create a object as usual
let dog = {
  name: harvey,
  age: 3
}

// using curly braces you can call them in the method signature  
function displayDog ({name, age}){
  // do something with name and age results
}

{% endhighlight %}
