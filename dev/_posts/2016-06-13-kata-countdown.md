---
layout: post
title: Kata Countdown word game
comments: false
published: true
category: javascript
description: |
  This is a test post of a post thats really nice and wonderful
---

We set ourselves a kata as part of out monthly meeting at work, to create a [countdown word game](https://en.wikipedia.org/wiki/Countdown_(game_show)) from the UK gameshow. We could use any language we liked. The front end guys used [javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) and the back end guys used [go](https://golang.org/) and some used [php](http://php.net/).

###Here is my approach
My idea was to get the list for letters and compare them against the words in the json. If the words contained the letters return the words. Then if the words only contained the letters, I knew these would be the words I needed. Then save the key for these so I could then return the words later. That was the idea anyway. After lots of research I decided to use [underscore.js](http://underscorejs.org/) as it had this nice function [intersection](http://underscorejs.org/#intersection). The docs says "Computes the list of values that are the intersection of all the arrays. Each value in the result is present in each of the arrays." So this was exactly what I wanted.

1. Get a word list to use to compare. [npm word list](https://www.npmjs.com/package/word-list)
2. Access the word list and create a list of letters to use (add this into input later)
3. Using a for loop, loop over the objects and get the keys and the values.
4. Save the values to a variable.
5. Get the length of the values.
6. Using the [intersection](http://underscorejs.org/#intersection) function compare my letters against the list of words.
7. If the length of the of the word with the matching items is the same length as a word in the dictionary it must be a full word, and this is what i want to return.
8. Find the key of the matching words.
9. Return the key reference which is the matching words.

{% highlight javascript %}

// get the words
var wordsJson = require('word-list-json');

// add in some letters
var letters =['b','e','d','n','e','r','s','h'];
{% endhighlight %}

{% highlight javascript %}

// for loop to get keys and values
  for(key in wordsJson) {

      // save the values to prop
      var prop = wordsJson[key];

      // Get the length of the values
      var wordsLength = prop.length;

      // using underscore find all the words that contain the letters
      var matchingLetters = _.intersection(prop, letters);

      // if the length of the of the word with the matching items is the same
      // length as a word in the dictionary it must be a full word
      if(matchingLetters.length === prop.length){

        // find the key of the matching words
        var result = matchingLetters && key;

        // log it out
        console.log(wordsJson[result]);
      }
  }
  {% endhighlight %}

####Improvements:
Currently this method wont compare double letters :-(

###Source code
[github](https://github.com/willforsyth/kata-countdown)
