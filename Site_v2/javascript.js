
// Force scroll to the top on page refresh
$(window).on("beforeunload", function() {
  $(window).scrollTop(0);
});



// Close the splash screen completely and open the navigation and tab container
window.setTimeout("closeSplashScreen();", 2050);
function closeSplashScreen(){
document.getElementById("splashScreen").style.display="none";
}

window.setTimeout("openNavigation();", 1975);
function openNavigation(){
document.getElementById("navigation").style.display="flex";
}

window.setTimeout("openContainer();", 1975);
function openContainer(){
document.getElementById("container").style.display="block";
}



// Change tabs
$(document).ready(function() {

  $(".tabsList li a").click(function(e) {
     e.preventDefault();
  });

  $(".tabsList li").click(function() {
     var tabid = $(this).find("a").attr("href");
     $(".tabsList li,body div.tab").removeClass("active");   // removing active class from tab

     $(".tab").hide();   // hiding open tab
     $(tabid).show();    // show tab
     $(this).addClass("active"); //  adding active class to clicked tab

     $("body, html, #container, .tab").scrollTop(0); // scroll to the top on tab change

  });

});



// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("modalButton");
var btn2 = document.getElementById("modalButton2");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeModal")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "flex";
}
btn2.onclick = function() {
  modal.style.display = "flex";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



// Browser tabs in Notes section functionality
function openBrowser(evt, browserName) {
  // Declare all variables
  var i, browserContent, browserLink;

  // Get all elements with class="browserContent" and hide them
  browserContent = document.getElementsByClassName("browserContent");
  for (i = 0; i < browserContent.length; i++) {
    browserContent[i].style.display = "none";
  }

  // Get all elements with class="browserLinks" and remove the class "active"
  browserLink = document.getElementsByClassName("browserLink");
  for (i = 0; i < browserLink.length; i++) {
    browserLink[i].className = browserLink[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(browserName).style.display = "block";
  evt.currentTarget.className += " active";
}



// Get the element with id="defaultOpen" and click on it
document.getElementById("browserDefault").click();



// Show/Hide extra browser tabs
function browserShowHide() {
  var x = document.getElementById("browserShowHide");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}



function alaskaShowHide() {
  var x = document.getElementById("alaskaShowHide");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function alaskaGalleryShowHide() {
  var x = document.getElementById("alaskaTravelGallery");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function icelandShowHide() {
  var x = document.getElementById("icelandShowHide");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function icelandGalleryShowHide() {
  var x = document.getElementById("icelandTravelGallery");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function nzShowHide() {
  var x = document.getElementById("nzShowHide");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function nzGalleryShowHide() {
  var x = document.getElementById("nzTravelGallery");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function wyShowHide() {
  var x = document.getElementById("wyShowHide");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function wyGalleryShowHide() {
  var x = document.getElementById("wyTravelGallery");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
