---
layout: post
title: React.js basics
comments: false
published: false
category: javascript
description: |
  Some basic functions and tips for react.js
---

### Some useful npm packages

Some react packages you will need for most projects

{% highlight javascript %}

  var React = require('react');
  var ReactDOM = require('react-dom'); // Only use for web apps

  var h = require('./helpers'); // Link this to a js page for additional functionality remember to export default the code

  var ReactRouter = require('react-router'); // Allows use to add routes
  var Router = ReactRouter.Router;  // make available
  var Route = ReactRouter.Route;  // make available
  var Navigation = ReactRouter.Navigation; // mixin

  var createBrowserHistory = require('history/lib/createBrowserHistory'); // this cleans the url up

{% endhighlight %}

### Creating a component

First use the createClass function to create a class and return your code. Then using ReactDOM.render add it to the page

{% highlight javascript %}

  var App = React.createClass({
      render: function(){
        return:(
          <h1>Hello world!</h1>
          )    
      }
  })


  ReactDOM.render(<App/>, document.getElementById('main'));

{% endhighlight %}
