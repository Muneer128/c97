var firebaseConfig = {
      apiKey: "AIzaSyBgQSnoOKEwfk2HMTtb2nl1MoMqEy7GPxc",
      authDomain: "kwitter-428f8.firebaseapp.com",
      databaseURL: "https://kwitter-428f8-default-rtdb.firebaseio.com",
      projectId: "kwitter-428f8",
      storageBucket: "kwitter-428f8.appspot.com",
      messagingSenderId: "97448960654",
      appId: "1:97448960654:web:32c2e79d87b214794c9fdf"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

user_name = localStorage.getItem("user_name")
function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"        
});

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+ Room_names+"onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();





function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = 'Kwitter_page.html';
}