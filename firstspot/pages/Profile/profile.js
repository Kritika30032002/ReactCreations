var stdno = 0;
var tbody = document.getElementById("tbody");

function AddItemToTable(name, email, phone) {
    let data = ""
    data =`
    <div class="cardGuide categoryGuide">
        <div class="img-containerGuide">
            <img src="../../images/ranjanUserPic" alt="guide PFP">
        </div>

        <div class="containerGuide">
            <h5 class="nameeGuide">${name}</h5>
            <h6 class="destinationGuide">${email}</h6>
            <h6>Price</h6>
            <h6>Description and ${phone}</h6>
        </div>
    </div>
    `
    tbody.innerHTML+=data

}

function AddAllItemsToTable(Guide) {
    stdno = 0;
    // tbody.innerHTML = "";
    Guide.forEach(element => {
        AddItemToTable(element.fullname, element.email, element.phone);
    });
}

import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/9.11.0/firebase-app.js";
const firebaseConfig = {
    apiKey: "AIzaSyAHLP7isomKx1zKwle0PpydCYdhHA1ctM4",
    authDomain: "firstspot-b7b7b.firebaseapp.com",
    databaseURL: "https://firstspot-b7b7b-default-rtdb.firebaseio.com",
    projectId: "firstspot-b7b7b",
    storageBucket: "firstspot-b7b7b.appspot.com",
    messagingSenderId: "781962837914",
    appId: "1:781962837914:web:6662ae66f885e764e2c423"
};

const app = initializeApp(firebaseConfig);

import {
    getDatabase,
    ref,
    child,
    onValue,
    get
}
from "https://www.gstatic.com/firebasejs/9.11.0/firebase-database.js";

const db = getDatabase();


function GetAllDataOunce() {
    const dbRef = ref(db);
    get(child(dbRef, "Guide")).then((snapshot) => {
        var Guide = [];
        snapshot.forEach(childSnapshot => {
            Guide.push(childSnapshot.val());
        })

        AddAllItemsToTable(Guide);
    })
}

window.onload = GetAllDataOunce;