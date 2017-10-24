
var React = require('react');
var ReactDOM = require('react-dom');
// Greeter React component -- container component

var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var actions = require('Actions');
var TodoAPI =  require('TodoAPI');
var Main = require('Main');

import Login from 'Login';
import ToDoApp from 'ToDoApp';
import firebase from 'App/firebase';
import Navigation from 'App/route';
//import './../playground/firebase/index';

var store = require('configureStore').configStore();

/*store.subscribe(() => {
    var state = store.getState();
    console.log(" New Status " + state);
    TodoAPI.setTodos(state.todolist);
});
*/

/*var initialTodos = TodoAPI.getTodos();
store.dispatch(actions.addToDos(initialTodos));
*/


store.dispatch(actions.startAddTodos());

//store.dispatch(actions.addToDo('Clean the yard'));
//store.dispatch(actions.addToDo('Clean the minde'));
$(document).foundation();

require('style!css!sass!ApplicationStyles');

firebase.auth().onAuthStateChanged((user) => {
  if(user) {
    hashHistory.push('/todos');
  } else {
    hashHistory.push('/');
  }
});

ReactDOM.render(
  <Provider store={store}>
    <Navigation/>
  </Provider>,
  document.getElementById('app')
);
