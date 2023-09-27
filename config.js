//npm install firebase@8.2.3

import firebase from "firebase";
require("@firebase/firestore");
// import firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDfzfnNR1-ydQMnPAtGQNlS9KJZsEQl8GM",
  authDomain: "ciclistaeletronico-13088.firebaseapp.com",
  projectId: "ciclistaeletronico-13088",
  storageBucket: "ciclistaeletronico-13088.appspot.com",
  messagingSenderId: "628568024194",
  appId: "1:628568024194:web:d80f5b57c950d5236a409b"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
