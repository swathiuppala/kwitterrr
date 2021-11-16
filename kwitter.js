const firebaseConfig = {
  apiKey: "AIzaSyAgEHOQ8_dwNnuz-Y7PyjjCz_w0zA3kINs",
  authDomain: "kwitter-4de1b.firebaseapp.com",
  databaseURL: "https://kwitter-4de1b-default-rtdb.firebaseio.com",
  projectId: "kwitter-4de1b",
  storageBucket: "kwitter-4de1b.appspot.com",
  messagingSenderId: "215941805628",
  appId: "1:215941805628:web:62f0c18d27231879f6f539"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser() {

  user_name = document.getElementById("user_name").value;

  localStorage.setItem("user_name", user_name);
  
    window.location = "kwitter_room.html";
}

