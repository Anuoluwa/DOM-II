// Your code goes here
const body = document.body;
const logoEffect = document.querySelector('.logo-heading')

function checkCookies() {
    var text = "";
  
    if (navigator.cookieEnabled == true) {
      text = "Welcome, Cookies are automatically enabled.";
    } else {
       text = "Cookies are not enabled.";
    }
    alert(text)
  }

  function bigImg(x) {
    x.style.height = "64px";
    x.style.width = "64px";
  }
  
  function normalImg(x) {
    x.style.height = "32px";
    x.style.width = "32px";
  }


// body.addEventListener('load', checkCookies());
// logoEffect.addEventListener('mouseover',  function logoMouse(event) {
//     event.target.style.hover.color = "orange";
// });

logoEffect.addEventListener("mouseenter", function( event ) {   
    // highlight the mouseenter target
    event.target.style.color = "gold";
    setTimeout(function() {
      event.target.style.color = "";
    }, 500);
  }, false);