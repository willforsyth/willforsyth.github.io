---
layout: post
title: HTML5 banner ads - Double Click
comments: false
published: true
category: tips
description: |
  Setting your ad up for googles double click, and some tips on how to make and set up in canvas.
---

## Publishing

When it comes to publishing the assets for double click there is a few things you need to do.
[This is a useful resource - How to prepare HTML5 assets for DCM](https://support.google.com/dcm/partner/answer/3145300?hl=en)

### Preparing your links

{% highlight javascript %}

// this needs to be in the head
<script type="text/javascript">var clickTag = "http://www.google.com"; </script>

// the href of the links to your site need to have this js snippet instead of the hard coded link to your ad target
<a href="javascript:window.open(window.clickTag)">
  <img src="images/dclk.png" border=0>
</a>

{% endhighlight %}

### Hosting the js animation libraries

Double click do not let you link to js cdn files you need to use there hosted versions.

[DoubleClick hosted JavaScript libraries](https://support.google.com/richmedia/answer/6307288?hl=en)

### Dimensions of ad

The dimensions of the add need to be added as a meta to the head.

{% highlight javascript %}
  <meta name="ad.size" content="height=0,width=0">
{% endhighlight %}

### Enabler

The script tag for double clicks enabler also needs to be added.

{% highlight javascript %}
  <script src="https://s0.2mdn.net/ads/studio/Enabler.js"></script>
{% endhighlight %}
