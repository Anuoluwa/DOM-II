// Your code goes here
const body = document.body;

function checkCookies() {
    var text = "";
  
    if (navigator.cookieEnabled == true) {
      text = "Welcome, Cookies are automatically enabled.";
    } else {
       text = "Cookies are not enabled.";
    }
    alert(text)
  }
body.addEventListener('load', checkCookies())