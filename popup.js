'use strict';
document.addEventListener('DOMContentLoaded', function () {
  let input = document.getElementById("input").innerHTML;
  let display = document.getElementById("display");
  let htmlCode = document.getElementById("code");

  document.getElementById('renderButton').onclick = function (element) {
    display.innerHTML = "DISPLAY: " + input;
    console.log(input);
    htmlCode.innerHTML = "CODE: " + input;
  }
})