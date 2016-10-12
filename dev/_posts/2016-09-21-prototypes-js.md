---
layout: post
title: OO Javascript with prototypes
comments: false
published: true
category: javascript
description: |
  How to add prototypes to objects and calling them
---

### Adding prototypes to objects and calling them

Here is a simple example of using a constructor with prototypes and also using a public api reference similar to the module pattern to expose the functions.

{% highlight javascript %}

  var dog = function(){
    this.type = "Jack Russel";
    this.name = "harvey";
  }

  dog.prototype = function() {

    var speak = function() {
      console.log("WOOF WOOF" + this.name);
    };

    var sit = function() {
      console.log("Fuck of" + this.type);
    };

    return {
      speak: speak,
      sit: sit
    }

  }();

  var harvey = new dog;

  // reference the prototype

  harvey.sit()
  harvey.speak()

{% endhighlight %}
