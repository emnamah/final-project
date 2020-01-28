// nav-list
$(document).ready(function() {
  $("i.icon").click(function() {
    $(".nav-list").slideToggle();
  });
});

// Home button
document
  .querySelector(".share-tendance-design")
  .addEventListener("click", function(e) {
    e.preventDefault();
    let url = this.getAttribute("data-url");
    let shareUrl = "Tendance-Design.html";
    // "file:///C:/Users/EMAHMOUDI/Desktop/Projet%20final/Tendance-Design.html";

    let top = window.screenTop || window.screenY;
    let left = window.screenTop || window.screenX;

    let width = window.innerWidth || document.documentElement.clientWidth;
    let height = window.innerHeight || document.documentElement.clientHeight;

    window.open(
      shareUrl,
      "Partager",
      "scrollbars=yes, width=640, height=340, top=0, left=0"
    );
  });

// Your web app's Firebase configuration
// var firebaseConfig = {
//   apiKey: "AIzaSyAFygrwlgCIvMvXa4mVWykswKLx5afjLs8",
//   authDomain: "projet-final-af9be.firebaseapp.com",
//   databaseURL: "https://projet-final-af9be.firebaseio.com",
//   projectId: "projet-final-af9be",
//   storageBucket: "projet-final-af9be.appspot.com",
//   messagingSenderId: "155250468",
//   appId: "1:155250468:web:b476b0822fa1a50a6d0db1",
//   measurementId: "G-XLPG6CG2M4"
// };

var firebaseConfig = {
  apiKey: "AIzaSyBMxs7BjFStRP5xrgvQ9ycWJZvmt24HA3U",
  authDomain: "test-4c88b.firebaseapp.com",
  databaseURL: "https://test-4c88b.firebaseio.com",
  projectId: "test-4c88b",
  storageBucket: "test-4c88b.appspot.com",
  messagingSenderId: "923594134842",
  appId: "1:923594134842:web:80a267f152cb1928566c03",
  measurementId: "G-MBQH4QW8R0"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Initialize Firebase

// firebase.initializeApp(firebaseConfig);
// firebase.analytics();

// Reference messages collection

// let messagesRef = firebase.database().ref("projet-final");
// console.log("messagesRef", messagesRef);
var messagesRef = firebase.database().ref("test");

// Listen for form submit

document.getElementById("contactForm").addEventListener("submit", submitForm);

// Submit form

function submitForm(e) {
  e.preventDefault();

  // Get value
  let nom = document.getElementById("nom").value;
  console.log("nom", nom);
  let email = document.getElementById("email").value;
  console.log("email", email);
  let sujet = document.getElementById("sujet").value;
  let rr = document.getElementById("message").value;

  // Save message
  saveMessage(nom, email, sujet, rr);

  // Show alert
  document.getElementByClassName("alert").style.display = "block";

  // Hide alert after 3sec
  setTimeout(function() {
    document.getElementByClassName("alert").style.display = "none";
  }, 3000);

  // Clear form
  document.getElementById("contactForm").reset();
}

// Function to get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(nom, email, sujet, rr) {
  let newMessageRef = messagesRef.push();
  newMessageRef.set({
    nom: nom,
    email: email,
    sujet: sujet,
    rr: rr
  });
}
