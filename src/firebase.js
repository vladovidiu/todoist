import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyAHpC-7WWXliXkk2I5TDxALhFy2l8CF8lc",
  authDomain: "todoist-bfcbc.firebaseapp.com",
  databaseURL: "https://todoist-bfcbc.firebaseio.com",
  projectId: "todoist-bfcbc",
  storageBucket: "todoist-bfcbc.appspot.com",
  messagingSenderId: "66357405716",
  appId: "1:66357405716:web:ed07de28b392309d",
});

export { firebaseConfig as firebase };
