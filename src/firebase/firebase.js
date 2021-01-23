import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCTZZDN7cOjCi6JkPr_COhTjBJtLA-xpDw",
    authDomain: "driving-74cf7.firebaseapp.com",
    databaseURL: "https://driving-74cf7.firebaseio.com",
    projectId: "driving-74cf7",
    storageBucket: "driving-74cf7.appspot.com",
    messagingSenderId: "87895495670",
    appId: "1:87895495670:web:80d760882cb803c0452dd7",
    measurementId: "G-7H3PB0E1PX"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const database = firebase.database();

export { firebase, database as default }