/* this function re-adjusts the width of the input area based on viewport width */

function setWidth() {
    var screenWidth = window.innerWidth; 
    var elements = document.querySelectorAll('.input1');
  
    elements.forEach(function(element) {
      if (screenWidth > 600) {
        element.style.width = '40vw';
      }
    });
  }
  
  window.onload = setWidth;
  window.addEventListener('resize', setWidth);