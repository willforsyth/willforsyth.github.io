---
layout: post
title: Command line tips
comments: false
category: tips
description: |
  Some useful command line tips
---
I have been using the command line for a while now, but I don't use it as much as I should. Coming from a design background it was a bit alien to me from the beginning. I now use it daily for things like, [git](http://git-scm.com/ "Git"), running projects using [grunt](http://gruntjs.com/ "grunt"), navigating files etc. I wanted to build up a resource of useful commands I have found on the way.

###Fire up a local server on localhost:8000 to view you built out files using back to route links.

{% highlight html %}
	python -m SimpleHTTPServer
{% endhighlight %}


####Copy your SSH key.

{% highlight html %}
	cat ~ /.ssh/id_rsa.pub | pbcopy
{% endhighlight %}


####Change the ownerships.
{% highlight html %}
  sudo chown -R USERNAME FILE YOU WANT TO CHANGE
{% endhighlight %}
