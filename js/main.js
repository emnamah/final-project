// nav-list
$(document).ready(function() {
  $("i.icon").click(function() {
    $(".nav-list").slideToggle();
  });
});

// Home button

document.querySelector(".share-tendance-design");
document.addEventListener("click", function(e) {
  e.preventDefault();
  let url =
    "file:///C:/Users/EMAHMOUDI/Desktop/Projet%20final/Tendance%20Design.html";
  window.open(url, "partage");
});
