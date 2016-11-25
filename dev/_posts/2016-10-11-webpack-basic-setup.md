---
layout: post
title: Webpack basic set up with ES6
published: true
comments: false
category: javascript
description: |
 Basic set up of a webpack environment using babel and jslint and ES6
---

Start of by ensuring you have [node](https://nodejs.org/en/), and [webpack](https://webpack.github.io/) and [webkit server](https://webpack.github.io/docs/webpack-dev-server.html) installed on your system.

### File set up

We start with setting up a file structure to make the project as easy to use as possible. Splitting up our javascript files and creating a public directory.

{% highlight html %}
js
  app.js
  module.1js
  module2.js
public
  index.js
package.json
.babelrc
webpack.config.json
{% endhighlight %}


### Webpack config

This is a simple set up. It resolves the paths so we can use the public directory and webpack knows where everything is when it builds and runs. It has watches our files and runs babel so we can use es6.

{% highlight javascript %}

var path = require('path');

module.exports = {
  context: path.resolve('js'),
  entry : ['./app', './module1'],
  output : {
    path: path.resolve('build/js/'),
    publicPath: '/public/assets/js/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: 'public'
  },
  watch: true,
  module : {
    preloaders : [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "jshint-loader"
      }
    ],
    loaders : [
      {
        test: /\.es6$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.es6']
  }
}


{% endhighlight %}


### .babelrc

This files is required when using babel it tells it what version of ecma script to compile out to. When this runs it will create bundle.js in our route.  

{% highlight javascript %}
  {
    "presets": ["es2015"]
  }
{% endhighlight %}

### package.json

Here is a package.json file to use with working dependencies. It has babel, webpack and jslint

{% highlight javascript %}

  {
    "name": "webpack-demo",
    "version": "1.0.0",
    "description": "",
    "main": "app.js",
    "scripts": {
      "start":  "webpack-dev-server -d" ,
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [],
    "author": "Will Forsyth",
    "license": "ISC",
    "devDependencies": {
      "babel-core": "^6.2.1",
      "babel-loader": "^6.2.0",
      "babel-preset-es2015": "^6.1.18",
      "jshint": "^2.8.0",
      "jshint-loader": "^0.8.3",
      "node-libs-browser": "^0.5.3",
      "webpack": "^1.12.9"
    }
  }

{% endhighlight %}

### index.html

This is the html I have used for this set up its all very simple. Apart from the script tag if you notice this does not look for bundle.js in the route which is where babel is compiling it into. The reason for this is that you wouldn't go to production with the javascript file in the route. The publicPath key in the webpack-config sorts ensures it knows where to look

{% highlight javascript %}

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <script src="/public/assets/js/bundle.js"></script>
  </body>
</html>

{% endhighlight %}

### app.js

The app.js file in this example imports a function called "login" from our module1 file. This is the module import syntax from ES6.

{% highlight javascript %}

  import {login} from "./module1";

  login('admin', 'idunn');

  console.log('App loaded');

{% endhighlight %}


### module1.js

This file imports a variable called 'testing' from module2.js and it also exports itself so it can be imported into app.js.

{% highlight javascript %}

  import {testing} from './module2';

  let login = (username, password) => {
    if(username !== 'admin' || password !== 'radical'){
      console.log('incorrect login' , testing);
    }
  };

  // login('admin', 'idunn');

  export {login}

{% endhighlight %}


### module1.js

This module is just used to export a variable to show an example of how you could use it.

{% highlight javascript %}
  let testing = 'try again';
  export {testing}
{% endhighlight %}

### Run webkit

To run this set up type 'npm start' this looks at the package.json and we have set a option called start. This runs 'webpack-dev-server -d' which fires up the server and waits for changes.
