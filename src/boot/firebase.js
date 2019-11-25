import * as firebase from 'firebase/app';

import "firebase/auth";
import "firebase/database"

var firebaseConfig = {
  apiKey: "AIzaSyAQYf58sbCbb8GIc5Kka9d-d3sHIVyUY8Q",
  authDomain: "quasar-eaf88.firebaseapp.com",
  databaseURL: "https://quasar-eaf88.firebaseio.com",
  projectId: "quasar-eaf88",
  storageBucket: "quasar-eaf88.appspot.com",
  messagingSenderId: "1019904307800",
  appId: "1:1019904307800:web:d32b0430160ff24485902d"
};

let firebaseApp = firebase.initializeApp(firebaseConfig);

let firebaseAuth = firebaseApp.auth()
let firebaseDb = firebaseApp.database()

export { firebaseAuth, firebaseDb }