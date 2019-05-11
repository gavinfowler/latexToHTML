'use strict';

document.addEventListener('DOMContentLoaded', function () {
  var input = document.getElementById("input");
  var display = document.getElementById("display");
  var htmlCode = document.getElementById("code");
  document.getElementById('renderButton').onclick = function (element) {

    var latex = input.value;
    latex = latex.replace(/\/[^\/]/g, "\\\\");

    htmlCode.innerHTML = latex;
    katex.render(latex, display);
  }
})