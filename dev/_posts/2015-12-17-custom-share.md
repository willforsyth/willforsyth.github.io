---
layout: post
title: Custom share icons
comments: false
published: false
category: javascript
description: |

---
Give an explanation of how to do it.

<code>
  add html
</code>
<code>
  var twitterComment = $('.twitter').attr('data-message');
  var pinterestImage = $('.pinterest').attr('data-image');
  var twitterUrl = 'http://twitter.com/intent/tweet?status='+twitterComment+' '+$(document).attr('title')+'+'+$(location).attr('href');
  var googleUrl = 'https://plus.google.com/share?url='+$(location).attr('href');
  var pinterestUrl = 'http://pinterest.com/pin/create/bookmarklet/?media='+pinterestImage+'&url=[URL]&is_video=false&description='+$(document).attr('title');
  $('.twitter').attr('href', twitterUrl);
  $('.google').attr('href', googleUrl);
  $('.pinterest').attr('href', pinterestUrl);
</code>
