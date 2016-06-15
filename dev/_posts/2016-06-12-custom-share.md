---
layout: post
title: Custom share icons
comments: false
published: true
category: javascript
description: |
  If your anything like me you will have been asked or wanted to add share icons to your site or clients site / app. Here is how.
---

#Add in custom share links.
If your anything like me you will have been asked or wanted to add share icons to your site or clients site / app. But the designers have proposed custom icons so adding in the default social share icons will make the design look crap or your haven't managed to convince them that the default functionality is actually ok. Having said that the default look is ugly. So what to do? I have used this method in production and all has went well. Here is the code and a simple explanation.

###How it works
You start by building up a url using the relevant url for each of the share services. So for example twitter url is [https://twitter.com/intent/tweet?status=](http://twitter.com/intent/tweet?status=) then you get the the document page title using this js:
{% highlight javascript %}$(document).attr('title'){% endhighlight %} This js gets the page title
{% highlight javascript %}$(location).attr('href'){% endhighlight %} This gets the link of the current page.
The after you have the page title, the page url you can also get some other bits you may want to build up the url. Such as an image or a message.
{% highlight javascript %}data-message="I love this product @"{% endhighlight %} I used data attributes to get these as required.


###Custom twitter
{% highlight html %}
      <a class="twitter" href="#" data-message="I love this product @" title="Share this on twitter">
{% endhighlight %}

{% highlight javascript %}
  var twitterComment = $('.twitter').attr('data-message');
  var twitterUrl = 'http://twitter.com/intent/tweet?status='+twitterComment+' '+$(document).attr('title')+'+'+$(location).attr('href');
  $('.twitter').attr('href', twitterUrl);
{% endhighlight %}


###Custom google+
{% highlight html %}
      <a class="google" href="http://www.plus.google.com/" title="Share this on google plus">
{% endhighlight %}


{% highlight javascript %}
  var googleUrl = 'https://plus.google.com/share?url='+$(location).attr('href');
  $('.google').attr('href', googleUrl);
{% endhighlight %}


###Custom pinterest
{% highlight html %}
      <a class="pinterest" data-image="http://link-to-image-url" href="http://pinterest.com" title="Share on pinterest">
{% endhighlight %}

{% highlight javascript %}
  var pinterestImage = $('.pinterest').attr('data-image');
  var pinterestUrl = 'http://pinterest.com/pin/create/bookmarklet/?media='+pinterestImage+'&url=[URL]&is_video=false&description='+$(document).attr('title');
  $('.pinterest').attr('href', pinterestUrl);
{% endhighlight %}
