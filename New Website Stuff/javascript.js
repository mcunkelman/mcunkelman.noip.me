
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



/* When the user clicks on the button, toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches(".dropdownButton, .fa, .fas")) {
    var dropdowns = document.getElementsByClassName("dropdownContent");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
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
