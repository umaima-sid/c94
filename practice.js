
//ADD YOUR FIREBASE LINKS

var firebaseConfig = {
  apiKey: "AIzaSyB8TCvU6CSu1LDiBLvO6vV42f_k2ZgOtbo",
  authDomain: "kwitter-4807a.firebaseapp.com",
  databaseURL: "https://kwitter-4807a-default-rtdb.firebaseio.com",
  projectId: "kwitter-4807a",
  storageBucket: "kwitter-4807a.appspot.com",
  messagingSenderId: "1027571222961",
  appId: "1:1027571222961:web:add555a870f8b6fc8c5590"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  function addUser(){
    user_name=document.getElementById("user_name").nodeValue;
    firebase.database().ref("/").child(user_name).update({
      purpose: "adding user"
    });
  }