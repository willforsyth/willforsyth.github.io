---
layout: post
title: Callbacks in javascript
comments: false
published: false
category: javascript
description: |
  Javascript callbacks
---

### Working with callbacks

{% highlight javascript %}

  function response() {
      // do something with the content when its available
      console.log( content );
  }

  // calling the function after the url will mean that response is only called after the response is received creating a callback.

  ajax( "http://url-of-site", response );

{% endhighlight %}
