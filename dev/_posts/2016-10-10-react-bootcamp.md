---
layout: post
title: React Bootcamp
published: true
category: javascript
description: |
  So I attended a bootcamp on [react.js](https://facebook.github.io/react/) and [redux](https://github.com/reactjs/redux) over a weekend.
---

So I attended a bootcamp on [react.js](https://facebook.github.io/react/) and [redux](https://github.com/reactjs/redux) over a weekend. It was 9am - 9pm and it defiantly lived up to its title of a bootcamp. It was a lot to take in over the two days so I tried to take as much notes as possible for myself and these are them. I hope these are all correct if not please let me know as I will be looking back over these often.

## The basics

### State

State is the data that react looks to for changes, so we need to only add in what we think will change to the state. As trying to keep track of a lot of different parts can get problematic [this explains it well](http://reactkungfu.com/2015/09/common-react-dot-js-mistakes-unneeded-state/).

{% highlight javascript %}

constructor() {
    super();
    this.state = {
      someThing: []
    };

    this.changingSomethingOnClick = this.changingSomethingOnClick.bind(this);
 }

{% endhighlight %}

### Updating state

Once we have set an initial sate we can add to this state. So if we have a click handler that updates out state. We can call this.setState then what we want to add to the state.

{% highlight javascript %}

constructor() {
    super();
    this.state = {
      comments: []
    };

    this.submitContent = this.submitContent.bind(this);
 }

  function addComment = (e) => (
  		this.setState({
  		   content: (this.content.value)
  		})
  )

  /// then onClick get the value and call addComment onClick={this.addComment}

{% endhighlight %}

### Super()

What is super and should you use it [good explanation](http://cheng.logdown.com/posts/2016/03/26/683329)

### Binding on click methods

Using bind(this) [nice explanation](http://reactkungfu.com/2015/07/why-and-how-to-bind-methods-in-your-react-component-classes/)


### Props

Properties take in information and we can pass it on to our components, they have two parts. One passing it onto our jsx component using an attribute and the second is defining it in our function. We need to pass in the argument called props to our component then it makes it available to be used within "props" is the most common word to use.

{% highlight javascript %}

function nameOfComponent = (props) => (
 <h1>{props.title}</h1>
)

<NameOfComponent title = {Title of section} />

{% endhighlight %}

### Creating components (Higher order components)

> "Now we are going to create a container component, it'll wrap your component into another component. The idea is to separate the logic from the presentation."


### Creating presentational components

Using normal functions instead of classes this is where we create the components html. And are presentational components. Save them in a file called components.

{% highlight javascript %}

const NameOfComponentJsx = () => (
  /// The jsx
  /// Note no return is needed as it uses es6 () which auto return
)

export default NameOfComponentJsx;

{% endhighlight %}


### Creating Classes to create Container components

To create a class use the new ES6 syntax instead of the old react.createElement. The classes hold the functionality and state of the component and should be saved into a folder called Containers. "The idea is to separate the logic from the presentation"

You need to import the component into the class then build up any state and props here to then pass on to the component when you use it.

{% highlight javascript %}

import NameOfComponentJsx from '../components/NameOfComponentJsx';

class NameOfComponent extends React.Component {
  constructor() {
    super();
	 /// State construction
  }

  render() {
    return (
      <NameOfComponentJsx />
    )
  }
}

export default NameOfComponent


//// and then used

<NameOfComponent />

{% endhighlight %}


When accessing state and props inside a class (container component) you need to call them with this. before each prop / state call.

> Presentational components contain the JSX and Container components surrounds and contains the component and holds the logic. These are called Higher Order components. State then needs to be made available to both


## React-router

[React-router](https://github.com/ReactTraining/react-router) is the go to companion for react to control the routes of an app. You set up each route and set the component="" to be the component you want to link to and then the path="" to the path you would like the link to lead to. Then you can use the path to in your navigation to activate the link.

{% highlight javascript %}

file > app.js

import { Router, Route, browserHistory } from 'react-router'

<Router history={browserHistory}>{Routes}</Router>

{% endhighlight %}


Then place the routes in a separate config file for good house keeping.

{% highlight javascript %}

file > config/routes.js

import { Router, Route} from 'react-router'

const Routes = (
    <Route>
      <Route path="/" component={Login} />
      <Route path="/dashboard" component={DashboardContainer} />
      <Route path="" component={NotFound}/>
    </Route>
);

export default Routes;

{% endhighlight%}

Then using the link key word call the router route.

{% highlight javascript %}


import { Link } from 'react-router'

<ul role="nav">
  <li><Link to="/">Login</Link></li>
  <li><Link to="/dashboard">Home</Link></li>
</ul>

{% endhighlight %}


When using children within the routing structure you need to use this.children to ensure the children routes get used.


## Redux

So [redux](https://github.com/reactjs/redux) is currently the advisable flux based methodology to control state. Redux creates a state tree and stores it all, minimal representation of the app. The benefits to this are that every time that react updates the state it refreshes the whole tree of data. So thats no great on a parge application as you could have hundreds of things updating the state and therefore causing lots of refreshes. Redux takes a copy of the state and using reducers you can make changes to small parts of the tree / components and these are the only bits that refresh. It ignores the rest of the data as it only worries about its own bit. This will speed everything up. Well this is my take on it anyway. The copy of the tree created by redux is called "the store".

> Redux is a predictable state container for JavaScript apps.

### Setting up your project

 Put actions in /actions/ (import use * as actions from /actions/ )
 Create a root file and add in the route and the create store redux stuff
 Create a store file and keep store in one place

A Manifest.json needs to be created to house the json instructions (more info)

You also need to wrap your router in a provider. Provider puts the store into context, so allows all children elements to access the store


{% highlight javascript %}

file > app.js

import { connect provider } from 'react-redux'

<Provider store={store}/>
	<Router history={browserHistory}>{Routes}</Router>
<Provider/>

{% endhighlight %}



### The Redux store

It takes three methods
 getState
 dispatch
 subscribe

{% highlight javascript %}

	const(createStore) = Redux
	const store = createStore(name of function)

	store.getState()

	store.subscribe(render)

	store.dispach({name of the action})

	\\ get more info
	connect(store)

  {% endhighlight %}


Create the store in the root and pass down with props or context

### Actions

An actions is just a json object and is a pure function so can not be modified. Its just read only, so you use actions to update the store using a action called reducer. They are pure functions. Pure function: don't depend on anything, can not modify parameters. They are predictable and efficient.

{% highlight javascript %}

const ADD_COMMENT = 'ADD_COMMENT'

{
  type: ADD_COMMENT
}

{% endhighlight %}


### Reducers

We pass it into a reducer which takes in two parameters - state, action the reducer is the function that makes the changes and then returns a new copy of the state to the store.

> Actions describe the fact that something happened, but don't specify how the application's state changes in response. This is the job of a reducer. [https://github.com/reactjs/redux/blob/master/docs/basics/Reducers.md](https://github.com/reactjs/redux/blob/master/docs/basics/Reducers.md)


{% highlight javascript %}


import {createStore } from 'redux';


const reducer = (state, action) => {

  /// do something with the state

 return state
}

const store = createStore(reducer, state)

store subscriber(() =>{
		/// Do something when the store changes
})

{% endhighlight %}


We can combine two reducers

{% highlight javascript %}

combine two reducers

state = (), action

return state.first
action

state.secondfunction
action

combileReducers({reducer1, reducter2})

{% endhighlight %}


> Actions are payloads of information that send data from your application to your store. They are the only source of information for the store. You send them to the store using store.dispatch(). [https://github.com/reactjs/redux/blob/master/docs/basics/Actions.md](https://github.com/reactjs/redux/blob/master/docs/basics/Actions.md)

### Dispatching

The dispatcher updates the application (sometimes a timeout is needed to see the change)


{% highlight javascript %}

setTimeout(() => {
	store.dispatch({type:"ADD_COMMENT", payload:''})
}, 5000)

{% endhighlight %}


Action creaters return the action, we can combine them with a dispatcher like so.

{% highlight javascript %}


function commentWithDispatch(text) {
  const action = {
    type: ADD_COMMENT,
    text
  }
  dispatch(action)
}

{% endhighlight %}


{% highlight javascript %}


use switch
function state can be empty array
switch(){
	case "something": {

	}
	case: {
	}
}
{% endhighlight %}



> when adding the state use es6 ... to copy whole object


### connect()

connect has two parameters

{% highlight javascript %}

export connect(mapStateToProps, mapDispatchToProps)()

{% endhighlight %}


#### Middleware

Middle was mentioned and I need to some more research into this

[http://redux.js.org/docs/advanced/Middleware.html](http://redux.js.org/docs/advanced/Middleware.html)


## Testing

We also looked into testing using Mocha and Chi. I am not going to lie my mind was fried by this point and I need to look into this some more also

Enzyme, Mocha, Chi etc

This was a nice repository that was set up for us to practice on. [https://github.com/alexlbr/react-koans](https://github.com/alexlbr/react-koans)


## Misc Tips

You can pass in functions to props making them usable in multiple places.
create props to pass functions, json and string to components

{% highlight javascript %}

function passSomething = () => (
  // Some nice code
)

<NameOfComponent niceName = {passSomething} />

{% endhighlight %}


### reactElement

These do not implement a component's functionality. They are a json and they dont change. You get a new version

### renderIntoDocument

Returns an attached react instance.

### ReactDOM.render

Should return the same React Instance for the same component (they are not detached). Will not create same instance

### Deep copy v Shallow copy

Deep copy identical copy
Shallow keeps the copy with a reference
http://blog.soulserv.net/understanding-object-cloning-in-javascript-part-i/

### GET DATA

Retrieving data from json data using fetch.

{% highlight javascript %}

    fetchUser(nameOfItemYouWantToFetch) {
        fetch(`/data/users/${nameOfItemYouWantToFetch}.json`, {
            method: 'get'
        }).then((response) => {
            return response.json()
        }).then((data) => {
            this.setState({user : data});
        }).catch((err)=> {
            console.log(err);
        });
    }

{% endhighlight %}


### Some mock data

Some mock data to use to practice building an application.

[http://jsonplaceholder.typicode.com/photos](http://jsonplaceholder.typicode.com/photos)


## Reading / Links
[I'm an inline-style link](https://www.google.com)

[https://facebook.github.io/react/docs/thinking-in-react.html](https://facebook.github.io/react/docs/thinking-in-react.html)

[https://facebook.github.io/react/docs/context.html](https://facebook.github.io/react/docs/context.html)

[jsbin.com/zasepe/5/](jsbin.com/zasepe/5/)

### boilerplate react app

[https://github.com/willforsyth/create-react-app.git](https://github.com/willforsyth/create-react-app.git)

[https://github.com/facebookincubator/create-react-app](https://github.com/facebookincubator/create-react-app)

### Learning

[learn-react.com](learn-react.com)

[alexlobera.com](alexlobera.com)

[https://github.com/arkency/reactjs_koans](https://github.com/arkency/reactjs_koans)

### Redux

[redux](https://github.com/reactjs/redux)

[http://redux.js.org/](http://redux.js.org/)

[http://redux.js.org/docs/advanced/](http://redux.js.org/docs/advanced/)

[https://github.com/yelouafi/redux-saga](https://github.com/yelouafi/redux-saga)

[https://yelouafi.github.io/redux-saga/docs/basics/ErrorHandling.html](https://yelouafi.github.io/redux-saga/docs/basics/ErrorHandling.html)

### repos from the course
https://github.com/designbyadrian/ReactBC-React-App

### Things I need to Research into

* redux-form (look into this for the forms)
* context.router.push
* contextTypes
* React.propTypes - could be array, object or function
* Manifest.json
