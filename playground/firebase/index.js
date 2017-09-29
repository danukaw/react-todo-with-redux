import firebase from 'firebase';

var config = {
   apiKey: "AIzaSyDTwxbkFHX2XoMXaZoAaXs544_LVjuNz0Y",
   authDomain: "mead-todo-app-c9fe3.firebaseapp.com",
   databaseURL: "https://mead-todo-app-c9fe3.firebaseio.com",
   projectId: "mead-todo-app-c9fe3",
   storageBucket: "mead-todo-app-c9fe3.appspot.com",
   messagingSenderId: "593526538713"
 };
 firebase.initializeApp(config);

var dbRef = firebase.database().ref();

dbRef.set({appName : 'Todo App'});

dbRef.set({ appName : 'Todo App', status : 'runnig'});

dbRef.set(
  {
    appName : 'Todo App',
    status : 'runnig',
    person : {
      name : 'Danuka',
      age : '32'
    }
  });

dbRef.child('person').set({
      name : 'Danuka',
      age : '36'
})


dbRef.child('status').set("delivered");
