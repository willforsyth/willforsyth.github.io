---
layout: post
title: Prototypes and constructors functions in javascript
comments: false
published: true
category: javascript
description: |
  Javascript Prototypes
---

### Working with Prototypes

So I wanted to write this down as it helps it to sink through the hard shell of my brain.

You can only add prototypes to constructor functions(or this is my current understanding).

This is an example from [team tree house](https://teamtreehouse.com) learning site that I have broken down to show you how its possible.

Here is an example constructor function.

{% highlight javascript %}

  // this creates a constructed object using a function (eg: a constructor function)
  // its currently empty with the keys set

  function Questions(text, choices, solution){
   this.text = text;
   this.choices = choices;
   this.answer = solution;
  }

  // add a some properties

  var questions = [
    new Questions("What color is the sky", ["blue", "red"], "blue"),
    new Questions("What color is the grass", ["blue", "green"], "green")
  ];

  // there will be two items on object

{% endhighlight %}

Now we can add a prototype to that we can apply some functionality to.
{% highlight javascript %}

  Questions.prototype.anyNameYouWant = function({
    // add some functionality you would want applied to each
  }

{% endhighlight %}

Ok so that all really great but one thing I got a bit lost with was how do I then iterate over the object applying the prototype function to each one. Here is a example of how thats possible.

We have our questions object constructed in this example so if we pass this into another constructor function and create a new object with some added additions of keeping track of iterations.

{% highlight javascript %}

  // create the constructor function

  function Quiz(questions){
     this.score = 0;
     this.questions = questions;
     this.currentQuestionIndex = 0;
  }

  // and pass in the questions assigning it to a new variable called quiz
  var quiz = new Quiz(questions);

{% endhighlight %}

Now this is where we can add in some prototypes and using the currentQuestionsIndex to keep track of our iterations over the questions.

{% highlight javascript %}

  // We create a prototype to get the current question, you may be familiar with using this.question[0] and passing in the number of the item you want to return

  // Instead if we pass in the "this.currentQuestionIndex" it will return "0" for the first iteration

  Quiz.prototype.getCurrentQuestion = function(){
     return this.questions[this.currentQuestionIndex];
  }

  // This will allow us to add 1 to the index after we have finished with any functionality with the current object.
  // we can also use this to track the score of the quiz in this example.

  Quiz.prototype.guess = function(answer) {
     if("check something"){
        this.score++;
      }
      this.currentQuestionIndex++;
  }

  // we also now have access to all the objects individual parents

  console.log(this.questions[this.currentQuestionIndex].text); // this will give us the text from the current question

{% endhighlight %}
