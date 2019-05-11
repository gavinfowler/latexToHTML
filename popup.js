'use strict';

let translator = katex;
const css = '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.10.1/dist/katex.min.css" integrity="sha384-dbVIfZGuN1Yq7/1Ocstc1lUEm+AT+/rCkibIcC/OmWo5f0EA48Vf8CytHzGrSwbQ" crossorigin="anonymous">'

document.addEventListener('DOMContentLoaded', function () {
  var input = document.getElementById("input");
  var display = document.getElementById("display");
  var htmlCode = document.getElementById("code");
  var copyButton = document.getElementById("copy");
  var cssObj = document.getElementById("css");
  var cssTag = css.replace(/</g, '&lt;').replace(/>/g, '&gt;');
  cssObj.innerHTML = cssTag;
  
  document.getElementById('renderButton').onclick = function (element) {

    copyButton.disabled = false;
    var latex = input.value;
    latex = latex.replace(/\//g, "\\\\");

    katex = translator.renderToString(latex);

    var stringKatex = katex.replace(/</g, '&lt;').replace(/>/g, '&gt;');

    htmlCode.innerHTML =  stringKatex;

    display.innerHTML = katex;
  };

  copyButton.onclick = function(){
    htmlCode.select();
    document.execCommand("copy");
  }
})