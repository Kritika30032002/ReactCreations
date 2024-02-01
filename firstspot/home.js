// Reference
const userlink = document.getElementById('user');
const signoutlink = document.getElementById('signOut');
const header = document.getElementById('hh');
let currentUser = null;

// Functions
function getUsername() {
    currentUser = sessionStorage.getItem("user");
    return currentUser;
}

function signOut() {
    sessionStorage.removeItem("user");
    localStorage.removeItem("user");
    localStorage.removeItem("keepLoggedIn");
    window.location = "index.html";
}

// Window
window.onload = function() {
    getUsername();

    if (currentUser === null) {
        userlink.innerText = "Create Account";
        userlink.classList.replace("rd-nav-link", "btn");
        userlink.classList.add("btn-primary");
        userlink.href = "../LoginOverView/index.html";

        signoutlink.hidden = true;
        signoutlink.innerText = "Login";
        signoutlink.classList.replace("rd-nav-link", "btn");
        signoutlink.classList.add("btn-success");
        signoutlink.href = "./pages/LoginOverView/index.html";
    } else {
        userlink.innerText = currentUser;
        header.innerText = "Sign In successfully";
        userlink.classList.replace("btn", "rd-nav-link");
        userlink.classList.add("btn-primary");
        userlink.href = "../loginOverview/index.html";

        signoutlink.hidden = false;
        signoutlink.innerText = "Sign Out";
        signoutlink.classList.replace("btn", "rd-nav-link");
        signoutlink.classList.add("btn-success");

        // Check if signoutlink exists before adding event listener
        if (signoutlink) {
            signoutlink.addEventListener("click", signOut);
        }
    }
};