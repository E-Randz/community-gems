
import Firebase from 'firebase';


let config = {
  apiKey: "AIzaSyBKQA51q2geGB13b9S7pllwZTZRK8AWNkU",
  authDomain: "community-gems.firebaseapp.com",
  databaseURL: "https://community-gems.firebaseio.com",
  projectId: "community-gems",
  storageBucket: "community-gems.appspot.com",
  messagingSenderId: "913262966255"
};

let app = Firebase.initializeApp(config);
export const db = app.database();