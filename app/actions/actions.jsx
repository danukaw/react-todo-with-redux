import firebase, {firebaseRef, gitHubProvider} from 'App/firebase';
import  moment from 'moment';

export var setSearchText = (searchText) => {
  return {
    type : 'SET_SEARCH_TEXT',
    searchText
  };
};

export var addToDo = (todo) => {
  return {
    type : 'ADD_TO_DO',
    todo
  };
};

export var startAddToDo = (text) => {
  return (dispatch, getState) => {

    var todo = {
      "task" : text,
      "completed" : false,
      "createdAt" : moment().unix(),
      "completedAt" : null
    };
    var todosRef = firebaseRef.child('todos').push(todo);

    return todosRef.then(()=> {
        dispatch(addToDo({
          ...todo,
          id : todosRef.key
        }))
    });
  }
}

export var updateTogleTodo = (id, updates) => {
  return {
    type : 'TOGGLE_TO_DO',
    id,
    updates
  };
};

export var startToggleToDo = (id, completed) => {

  return (dispatch, getState) => {

    var updates = {
      "completed" : completed,
      "completedAt" : completed ? moment().unix() : null
    }

    var todosRef = firebaseRef.child('todos/'+id);

    return todosRef.update(updates).then(()=> {
      dispatch(updateTogleTodo(id, updates));
    });

  }

};

export var showToggleCompleted = () => {
  return {
      type : 'SHOW_TOGGLE_COMPLETED'
  };
};

export var startAddTodos = () => {

  return (dispatch, getState) => {

    var todosRef = firebaseRef.child('todos');

    return todosRef.once('value').then((snapshot) => {

      var todos = snapshot.val() || {};
      var parseToDos = [];

      Object.keys(todos).forEach((todoId) => {

        parseToDos.push({
          ...todos[todoId],
          id : todoId
        });

      });
      dispatch(addToDos(parseToDos));

    });
  }

};

export var addToDos = (addTodos) => {
  return {
    type: 'ADD_TODOS',
    addTodos
  }
};

export var startLogin = () => {
  return (dispatch, getState) => {
    return firebase.auth().signInWithPopup(gitHubProvider).then((result) => {
      console.log("Authentication worked", result);
    }, (error) => {
      console.log("Authentication is failed", error);
    });
  }
};

export var startLogout = () => {
  return (dispatch, getState) => {
    return firebase.auth().signOut().then(() => {
      console.log('Successfuly signed out');
    }, () => {
      console.log('Problam with signing out..');
    });
  }
};
