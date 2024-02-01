import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";


const firebaseConfig = {
    apiKey: "AIzaSyAHLP7isomKx1zKwle0PpydCYdhHA1ctM4",
    authDomain: "firstspot-b7b7b.firebaseapp.com",
    databaseURL: "https://firstspot-b7b7b-default-rtdb.firebaseio.com",
    projectId: "firstspot-b7b7b",
    storageBucket: "firstspot-b7b7b.appspot.com",
    messagingSenderId: "781962837914",
    appId: "1:781962837914:web:6662ae66f885e764e2c423"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

import { getDatabase, ref, set, child, get } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-database.js";

const db = getDatabase();

// ////////The refrences////////////////////////////////////////////////

const name = document.getElementById("nameInp");
const email = document.getElementById("emailInp");
const username = document.getElementById("userInp");
const pass = document.getElementById("passInp");
const submit = document.getElementById("sub_btn");

// ///////////////////////validation//////////////////////////////////

function isEmptyOrSpaces(str) {
    return str === null || str.match(/^ *$/) !== null;
}


function validation() {
    let nameregex = /^[a-zA-Z\s]+$/;
    let emailregex = /^[a-zA-Z0-9]+@(gmail|yahoo|outlook)\.com$/;
    let userregex = /^[a-zA-Z0-9]{5,}$/;

    if (isEmptyOrSpaces(name.value) || isEmptyOrSpaces(email.value) || isEmptyOrSpaces(username.value) || isEmptyOrSpaces(pass.value)) {
        alert("you cannot left any fields empty")
        return false;
    }

    if (!nameregex.test(name.value)) {
        alert("The name should only contain alphabets!");
        return false;
    }
    if (!emailregex.test(email.value)) {
        alert("Enter a valid email");
        return false;
    }
    if (!userregex.test(username.value)) {
        alert("-username can only be alphanumeric\n-username must be atleast 5 characters\n");
        return false;
    }
    return true;
}

// ------------------------register user to firebase----------------------------//
function RegisterUser() {
    if (!validation()) {
        return;
    };
    const dbRef = ref(db);

    get(child(dbRef, "UserList/" + username.value)).then((snapshot) => {
        if (snapshot.exists()) {
            alert("Account already exixts!");
        } else {
            set(ref(db, "UsersList/" + username.value), {
                    fullname: name.value,
                    email: email.value,
                    username: username.value,
                    password: pass.value
                })
                .then(() => {
                    alert("user added successfully!");
                }).catch((error) => {
                    alert("error" + error);
                })
        }
    })
}

// /////////////////encript //////////////////////////////////
// function encPass() {
//     var pass12 = CryptoJS.AES.encrypt(pass.value, pass.value);
//     return pass12.toString();
// }




// --------------------------------Assign the events-------------------------/////

submit.addEventListener("click", RegisterUser);