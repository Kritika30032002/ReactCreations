import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
// import { initializeApp } from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAHLP7isomKx1zKwle0PpydCYdhHA1ctM4",
  authDomain: "firstspot-b7b7b.firebaseapp.com",
  databaseURL: "https://firstspot-b7b7b-default-rtdb.firebaseio.com",
  projectId: "firstspot-b7b7b",
  storageBucket: "firstspot-b7b7b.appspot.com",
  messagingSenderId: "781962837914",
  appId: "1:781962837914:web:6662ae66f885e764e2c423",
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);

import {
  getDatabase,
  ref,
  set,
  child,
  get,
} from "https://www.gstatic.com/firebasejs/9.6.11/firebase-database.js";
// import { validation } from "uuid";
const db = getDatabase();
// ////////The refrences////////////////////////////////////////////////

const username = document.getElementById("userInp");
const pass = document.getElementById("passInp");
const submit = document.getElementById("sub_btn");

//////////////////

function AuthenticateUser() {
  const dbref = ref(db);
  console.log(username.value);
  get(child(dbref, "UsersList/" + username.value)).then((snapshot) => {
    // console.log(snapshot.val());
    if (snapshot.exists()) {
      // let dbpass = decPass(snapshot.val().password);
      // console.log(dbpass, pass.value, "here");
      let dbpass = snapshot.val().password;
      if (dbpass == pass.value) {
        login(username.value);
      } else {
        alert("user does not exist");
      }
    } else {
      alert("username or password is invalid");
    }
  });
}

// ////////////decript process
// function decPass(dbpass) {
//     var pass12 = CryptoJS.AES.decrypt(dbpass, pass.value);
//     return pass12.toString(CryptoJS.enc.utf8);
// }

//////////////////login

function login(user) {
  // let keepLoggedIn = document.getElementById("customSwitch1").checked;
  // if (!keepLoggedIn) {
  //     sessionStorage.setItem("user", user);
  //     window.location = "../home.html";
  //     // console.log(sessionStorage.getItem("user"));
  // } else {
  //     localStorage.setItem("keepLoggedIn", "yes");
  //     localStorage.setItem("user", user);
  //     window.location = "../home.html";r;
  //     // console.log(localStorage.getItem("user"));
  // }

  sessionStorage.setItem("user", user);
  window.location = "../../index.html";
}
// ////////////////////submit

submit.addEventListener("click", AuthenticateUser);
