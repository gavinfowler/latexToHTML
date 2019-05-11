// TODO: add html styling

'use strict';

var translator = katex;
const css = '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.10.1/dist/katex.min.css" integrity="sha384-dbVIfZGuN1Yq7/1Ocstc1lUEm+AT+/rCkibIcC/OmWo5f0EA48Vf8CytHzGrSwbQ" crossorigin="anonymous">'

document.addEventListener('DOMContentLoaded', function () {
  var input = document.getElementById("input");
  var display = document.getElementById("display");
  var htmlCode = document.getElementById("code");
  var copyButton = document.getElementById("copy");
  var cssObj = document.getElementById("css");
  var renderButton = document.getElementById('renderButton');

  var cssTag = css.replace(/</g, '&lt;').replace(/>/g, '&gt;');
  cssObj.innerHTML = cssTag;

  chrome.storage.local.get('latexInput', function(data) {
    input.value = data.latexInput;
    renderButton.click();
  });

  renderButton.onclick = function (element) {
    try {
      // enable copy button
      copyButton.disabled = false;

      // get value from input and fix '\'
      var latex = input.value;
      chrome.storage.local.set({latexInput: latex});
      latex = latex.replace(/\//g, "\\\\");

      // translate to katex
      katex = translator.renderToString(latex);

      // enable katex to be printed out
      var stringKatex = katex.replace(/</g, '&lt;').replace(/>/g, '&gt;');

      // print katex to document
      htmlCode.innerHTML = stringKatex;
      display.innerHTML = katex;
    } catch (err) {
      // if incorrect input
      console.log(err);
      htmlCode.innerHTML = err;
      display.innerHTML = "ERROR";
    }
  };

  copyButton.onclick = function () {
    htmlCode.select();
    document.execCommand("copy");
  }
})