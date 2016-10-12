---
layout: post
title: Organising your javascript with modules
comments: false
published: true
category: javascript
description: |
  Organising your javascript with modules, using closures, private functions and init.
---

## Cleaning up our code

To improve our code and ensure its all contained and will not be effected by other code we write. For this example we have something like this using document.ready and several functions. These are all available globally and on the window. So we need to use some methods to clean up our code.

### This is our code that needs some cleaning up

In this example we are creating a modal using an a linked html file. The functionality is not that important its just so we can get an idea of how this process works.

{% highlight javascript %}

  $(document).ready(function(){

    // Our global variable
    var $modal = $("[rel='js-modal']");

    // click handler that gets the html using ajax and replaces the content
    $(".controls > a" ).on("click", function(e){
      e.preventDefault();

      var url = $(e.target).attr("href");

      $.ajax(url, {dataType: "text"}).then(function(contents){
          $modal.html(contents).show();
      });
    })

  });

{% endhighlight %}


### Here are the steps for this example

Surround our code in a self invoking function.

{% highlight javascript %}

var header = (function(){
  ...
})();

{% endhighlight %}


I have moved the click handler function into its own function and then called on the event

{% highlight javascript %}

function headerClicks(e) {
  e.preventDefault();
  var url = $(e.target).attr("href");
  $.ajax(url, {dataType: "text"}).then(function(contents){
      $modal.html(contents).show();
  });
}

{% endhighlight %}

Create an init function and place our calls and variables in here

{% highlight javascript %}

function init(){
    $modal = $("[rel='js-modal']");
    $("[rel='js-controls'] > a" ).on("click", headerClicks);
}

{% endhighlight %}

Then to complete the closure I have returned the init

{% highlight javascript %}

return {
  init: init
}

{% endhighlight %}

Move the code initialisation to the bottom

{% highlight javascript %}

(document).ready(header.init);

{% endhighlight %}

The final code

{% highlight javascript %}

  // surround our code with a self invoking function
  var header = (function(){

      var $modal;

      // split the call handler into a new function and call on the click
      function headerClicks(e) {
        e.preventDefault();
        var url = $(e.target).attr("href");
        $.ajax(url, {dataType: "text"}).then(function(contents){
            $modal.html(contents).show();
        });
      }

      // move our initiation calls to an init function
      function init(){
          $modal = $("[rel='js-modal']");
          $("[rel='js-controls'] > a" ).on("click", headerClicks);
      }

     // using a closure return the init method ( dont call )
      return {
        init: init
      }

  })();


  // move the document get ready to the bottom and call the moduled function and daisy chain the init.
  $(document).ready(header.init);

{% endhighlight %}


So I wanted to experiment making a quiz with the new things we have learned. Now since my javascript is not super nice yet I want to make as many small programme's as I can do practice as much as I can. 

<p data-height="265" data-theme-id="0" data-slug-hash="EyGRBP" data-default-tab="html" data-user="willforsyth" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/willforsyth/pen/EyGRBP/">Quiz</a> by Will Forsyth (<a href="http://codepen.io/willforsyth">@willforsyth</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>
