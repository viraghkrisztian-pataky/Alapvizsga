// Script: theme toggle, scroll-to-top
function themeFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");

  var themeSwitch = document.getElementById('theme-switch');
  
  if (themeSwitch.value === "Sötét") {
    themeSwitch.value = "Világos";
  } else {
    themeSwitch.value = "Sötét";
  }
}
// Get the button
let mybutton = document.getElementById("s-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}