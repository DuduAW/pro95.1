var firebaseConfig = {
  apiKey: "AIzaSyDMt1Kovli0E9CMQhO4X0vYD1h8yRD--ck",
  authDomain: "teste1-be144.firebaseapp.com",
  databaseURL: "https://teste1-be144-default-rtdb.firebaseio.com",
  projectId: "teste1-be144",
  storageBucket: "teste1-be144.appspot.com",
  messagingSenderId: "336798902299",
  appId: "1:336798902299:web:235562555448cf5ec8f0be",
  measurementId: "G-8YNQ10V19C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

  userName = localStorage.getItem("userName");

document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";

function addRoom()
{
  roomName = document.getElementById("roomName").value;

  firebase.database().ref("/").child(roomName).update({
    purpose : "adicionar nome de sala"
  });

    localStorage.setItem("roomName", roomName);
    
    window.location = "kwitterPage.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       roomNames = childKey;
       console.log("Nome da Sala - " + roomNames);
      row = "<div class='roomName' id="+roomNames+" onclick='redirectToRoomName(this.id)' >#"+ roomNames +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("roomName", name);
    window.location = "kwitterPage.html";
}

function logout() {
localStorage.removeItem("userName");
localStorage.removeItem("roomName");
    window.location = "index.html";
}


function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey =
childSnapshot.key;
roomNames = childKey;
//Início do código
<div id="output"></div>
rediectToRoomName()
{
  console.log(name);
  localStorage.setItem("roomName", name);
    window.location = "kwitterPage.html";
}
//Fim do código
});});}
getData();


































































































