import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDPkWlmuoP8JRb4mdwADJcmyF3FjI6klOg",
  authDomain: "clone-alfredo.firebaseapp.com",
  projectId: "clone-alfredo",
  storageBucket: "clone-alfredo.appspot.com",
  messagingSenderId: "395465915815",
  appId: "1:395465915815:web:1ca0f8b6db0a3cb2f80a82",
  measurementId: "G-XF12GZBKBB",
});

const auth = firebase.auth();

export { auth };
