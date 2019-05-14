// Your code goes here
const body = document.body;
const logoEffect = document.querySelector('.logo-heading')
const btn  = document.querySelectorAll('btn');
const nav = document.querySelector('.nav');

// function loader () {
//     setTimeout(() =>{
//         let divLoader = document.createElement('div');
//         divLoader.style.cssText = 'border: 16px solid #f3f3f3;border-radius: 50%;border-top: 16px solid #3498db;width: 120px;height: 120px;-webkit-animation: spin 2s linear infinite;animation: spin 2s linear infinite;'
//         document.window.appendChild(divLoader);
//     }, 2000)
// }

// body.addEventListener('load'. loader())

logoEffect.addEventListener("mouseover", function( event ) {   
    event.target.style.color = "gold";
    setTimeout(function() {
      event.target.style.color = "";
    }, 500);
  }, false);

  nav.addEventListener("mouseenter", function( event ) {   
    // highlight the mouseenter target
    event.target.style.color = "purple";
  
    // reset the color after a short delay
    setTimeout(function() {
      event.target.style.color = "";
    }, 500);
  }, false);
  
nav.addEventListener("mouseover", function( event ) {   
    event.target.style.color = "gold";
  
    setTimeout(function() {
      event.target.style.color = "";
    }, 500);
  }, false);
function checkCookies() {
    var text = "";
  
    if (navigator.cookieEnabled == true) {
      text = "Welcome, Cookies are automatically enabled.";
    } else {
       text = "Cookies are not enabled.";
    }
    alert(text)
  }
body.addEventListener('load', checkCookies());

  function  keydown() {
    body.style.backgroundColor = "#ABB2B9"
    setTimeout(() => {
        body.style.backgroundColor = "white"
    }, 1000)
  }
body.addEventListener('keydown', keydown());



