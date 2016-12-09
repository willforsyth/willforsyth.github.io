---
layout: post
title: Setting up React Redux
published: true
category: javascript
description: |
 Setting up redux in react
---

Redux is made up of actions, reducers, store and connect

### Constructor

Add the constructor function to the top of the class component and set some state

Example
{% highlight javascript %}
constructor(props, context){
	super(props, context);

	this.state = {
	  example: {title: ""}
};
{% endhighlight %}


Getting a property 'state' not defined on events?
You need to bind this.

{% highlight javascript %}
  this.oneChange = this.onChange.bind(this);
  this.onClick = this.onClick.bind(this);
{% endhighlight %}


### Action creator

Create a file called actions and save actions files here.

{% highlight javascript %}
nameOfAction(rating){
  return {type: NAME_OF_ACTION, example: title  }
}
{% endhighlight %}

### Reducer

Create a file called reducers and save reducer files here.
- object.assign() keeps the store immutable
- ... splits the object and allows us to assign a new value

{% highlight javascript %}
function theReducer(state = [], action){
   switch(action.type){
      case 'NAME_OF_ACTION';
      return [...state,
        Object.assign({}, action.newContent)
      ];
    default:
      return state;
   }
}
{% endhighlight %}

Combine reducers
Save this is the reducers file and name it index.js

{% highlight javascript %}
import {combineReducers} from 'redux';
import courses from './theReducer';
{% endhighlight %}

{% highlight javascript %}
const rootReducer = combineReducers ({
  theReducer
  // other reducers
});

export default rootReducer;

{% endhighlight %}


### Redux store

Next we need to create the redux store. Create a folder called store and a configStore file. This is where we createStore and set the initial state.

{% highlight javascript %}
import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

export default function configureStore(initialState){
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(reduxImmutableStateInvariant())
  );
}

{% endhighlight %}

### Link up the redux parts

In index.js we now need to set up some bits.

{% highlight javascript %}
import configureStore from './store/configureStore';
{% endhighlight %}

{% highlight javascript %}
const store = configureStore();
{% endhighlight %}

import provider
{% highlight javascript %}
import {Provider} from 'react-redux';
{% endhighlight %}

Wrap routes in provider
{% highlight javascript %}
<Provider store={store}>
	<Router routes={routes}; />
</Provider>,
document.getElementById('app');
{% endhighlight %}

This is the basics of redux now set up and only needs to be set up once.


### Hook up a component into redux using connect

Connect is used to connect to the store from our components so they can interact with redux

{% highlight javascript %}
import {connect} from 'react-redux'
import * nameOfAction from '../../actions/nameOfAction'
{% endhighlight %}

Change the export default call to:
{% highlight javascript %}
export default connect()(yourPage);
{% endhighlight %}

It takes two parameters, mapStatetoProps and mapDispatchToProps
{% highlight javascript %}
export default connect(mapStatetoProps, mapDispatchToProps)(yourPage);
{% endhighlight %}

Now we need to create the function, it takes two parameters state and ownProps. We return the properites that we want to make available. So we are setting the state to props so we can use in the page functionality.

{% highlight javascript %}
function mapStateToProps(state, ownProps){
  return{
    title: state.title
  };
}
{% endhighlight %}

mapDispatchToProps lets us expose which dispatch methods we want to ahve availble. Leaving it of leaves all dispatches available.

Now we can dispatch a action. dispatch then the name of the action and what you want to pass in.
{% highlight javascript %}
this.props.dispatch(nameOfAction.nameOfAction(this.state.title))
{% endhighlight %}

This is the basics of redux. A good addition to redux is the redux dev tool :-)
