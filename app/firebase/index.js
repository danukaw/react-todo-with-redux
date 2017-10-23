import firebase from 'firebase';

try{

  /*var config = {
    apiKey: "AIzaSyDTwxbkFHX2XoMXaZoAaXs544_LVjuNz0Y",
    authDomain: "mead-todo-app-c9fe3.firebaseapp.com",
    databaseURL: "https://mead-todo-app-c9fe3.firebaseio.com",
    projectId: "mead-todo-app-c9fe3",
    storageBucket: "mead-todo-app-c9fe3.appspot.com",
    messagingSenderId: "593526538713"
  };*/

  var config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID
  };

  console.log(process.env.API_KEY);
  console.log(process.env.AUTH_DOMAIN);
  console.log(process.env.DATABASE_URL);
  console.log(process.env.PROJECT_ID);
  console.log(process.env.STORAGE_BUCKET);
  console.log(process.env.MESSAGING_SENDER_ID);

  firebase.initializeApp(config);

} catch(e) {
  console.log('its unable to establish a connection with firebase', e);
}

export var firebaseRef = firebase.database().ref();
export default firebase;
