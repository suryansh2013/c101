// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
    apiKey: "AIzaSyACwQpSpaPLzD-PBYwYpUJGVC9Nld9WluU",
    authDomain: "chat-app-7e1f5.firebaseapp.com",
    databaseURL: "https://chat-app-7e1f5-default-rtdb.firebaseio.com",
    projectId: "chat-app-7e1f5",
    storageBucket: "chat-app-7e1f5.appspot.com",
    messagingSenderId: "742754840209",
    appId: "1:742754840209:web:d7cff6ebda17272f9c9930"
  };

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    localStorage.setItem("user_name", user_name);
    window.location = "chat_room.html";
}