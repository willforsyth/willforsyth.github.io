---
layout: post
title: jquery ajax
comments: false
published: false
category: javascript
description: |
  How to use ajax for text and json
---



### Ajax modal

blah blah

#### the links to click

{% highlight html %}

  <div class="controls" rel="js-controls">
    <a href="register.html" rel="nofollow js-register">register</a> |
    <a href="login.html" rel="nofollow js-login">login</a>
  </div>

{% endhighlight %}

#### the html for the modal is on the page

{% highlight html %}

  <div id="modal" rel="js-modal"></div>

{% endhighlight %}


#### the js

{% highlight javascript %}

  var $modal = $('#modal');

  $(".controls > a" ).on("click", function(e){
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();

    var url = $(e.target).attr("href");
    console.log(url);
    $.ajax(url, {
      dataType: "text"
    }).then(function(contents){
        $modal.html(contents).show();
    });

  })

{% endhighlight %}




### Ajax replace content

blah blah

{% highlight html %}

  <div class="content" rel="js-content">
    <div class="items" rel="js-items">
      <div rel="js-item-0"></div>
      <div rel="js-item-1"></div>
      <div rel="js-item-2"></div>
      <div rel="js-item-3"></div>
      <div rel="js-item-4"></div>
      <div rel="js-item-5"></div>
    </div>
  </div>

{% endhighlight %}

Using the rel and regex attributes get the id of the clicked item then ajax the url of the content matching the id and replace the content

{% highlight javascript %}

  var $items = $("[rel=js-carousel] > [rel=js-content] > [rel=js-items]");
  var $content = $("[rel=js-details]");

  function personClicked(e){
    var id = $(e.target).attr("rel").replace(/^.*(\d+)$/,"$1");
    e.preventDefault();
    $.ajax("details/" + id + ".html", {dataType: "text"}).then(function(contents){
      $content.html(contents);
    })
  }

  $items.on("click","[rel*='js-item-']", personClicked);

{% endhighlight %}
