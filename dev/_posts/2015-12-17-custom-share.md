---
layout: post
title: Custom share icons
comments: false
published: false
category: javascript
description: |

---
Give an explanation of how to do it.

{% highlight html %}
      <a class="twitter" href="#" data-message="I love this product @" title="Share this on twitter">
      <a class="google" href="http://www.plus.google.com/" title="Share this on google plus">
      <a class="pinterest" data-image="http://localhost:9000/imgs/product/slider-sample-430.jpg" href="http://pinterest.com" title="Share on pinterest">
{% endhighlight %}

{% highlight javascript %}
  var twitterComment = $('.twitter').attr('data-message');
  var pinterestImage = $('.pinterest').attr('data-image');
  var twitterUrl = 'http://twitter.com/intent/tweet?status='+twitterComment+' '+$(document).attr('title')+'+'+$(location).attr('href');
  var googleUrl = 'https://plus.google.com/share?url='+$(location).attr('href');
  var pinterestUrl = 'http://pinterest.com/pin/create/bookmarklet/?media='+pinterestImage+'&url=[URL]&is_video=false&description='+$(document).attr('title');
  $('.twitter').attr('href', twitterUrl);
  $('.google').attr('href', googleUrl);
  $('.pinterest').attr('href', pinterestUrl);
{% endhighlight %}
