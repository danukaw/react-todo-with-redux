var redux = require('redux');
//var thunk = require('redux-thunk').default;
var {sarchTextReducer, showCompltedReducer, addTodoReducer} = require('Reducers');

export var configStore = (initialState = {"searchText": "default search text", "showCompleted" : false }) => {
  // combineReducers
  var reducers = redux.combineReducers({
    searchText : sarchTextReducer,
    showCompleted : showCompltedReducer,
    todolist : addTodoReducer
  });

  var store = redux.createStore(reducers, initialState, redux.compose(
      //redux.applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
