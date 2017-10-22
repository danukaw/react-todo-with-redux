var  moment = require('moment');
var uuidv1 = require('uuid/v1');

export var sarchTextReducer = (state="", action) => {

  switch(action.type) {

    case 'SET_SEARCH_TEXT':
      return action.searchText;
    default :
      return state;

  };
};

/**
export var showCompltedReducer = (state={showCompleted : false}, action) => {

  switch(action.type) {

    case 'SHOW_TOGGLE_COMPLETED':
      return {
        showCompleted : true
      };
    default :
      return state;

  };
};
**/

export var showCompltedReducer = (state=false, action) => {

  switch(action.type) {

    case 'SHOW_TOGGLE_COMPLETED':
      return !state;
    default :
      return state;

  };
};

export var addTodoReducer = (state=[], action) => {

  switch(action.type) {

    case 'ADD_TO_DO':
      return [
        ...state,
        action.todo
      ];

    case 'TOGGLE_TO_DO' :

      return state.map((todo) => {

        if (todo.id === action.id) {
          return {
            ...todo,
            ...action.updates
          }
        } else {
          return todo;
        }
      });

    case 'ADD_TODOS' :
      return [
        ...state,
        ...action.addTodos
      ];

    default:
      return state;

  }

};
