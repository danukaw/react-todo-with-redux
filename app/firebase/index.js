import firebase from 'firebase';

try{

  var config = {
    apiKey: "AIzaSyDTwxbkFHX2XoMXaZoAaXs544_LVjuNz0Y",
    authDomain: "mead-todo-app-c9fe3.firebaseapp.com",
    databaseURL: "https://mead-todo-app-c9fe3.firebaseio.com",
    projectId: "mead-todo-app-c9fe3",
    storageBucket: "mead-todo-app-c9fe3.appspot.com",
    messagingSenderId: "593526538713"
  };
  firebase.initializeApp(config);

} catch(e) {
  console.log('its unable to establish a connection with firebase', e);
}

export var firebaseRef = firebase.database().ref();
export default firebase;
