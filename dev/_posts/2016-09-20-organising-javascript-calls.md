---
layout: post
title: Scalable dom calls
published: true
category: javascript
description: |
  Allowing dom calls to be changed using the function call.
---

## Cleaning up our code

We may have some code that makes lots of dom called to elements in the dom that we are targeting with some code. What happens if we want to use the same code but we make want to change the classes or ids that we used to target it. Instead of editing the internals of our code we can cache references to the DOM elements we need to manage. Then call them later.


#### So this

{% highlight javascript %}

function init(opts){
    $('open').on("click",function(){
      console.log("something")
    });
}

init();

{% endhighlight %}


#### Turns into this

{% highlight javascript %}

function init(opts){
    $open = $(opts.open);
    $('open').bind("click",doSomeThingFUnction);
}

init({
  open: "#open"
});

{% endhighlight %}
