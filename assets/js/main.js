"use strict";

function playSound(e) {
  var audio = document.querySelector("audio[data-key=\"" + e.keyCode + "\"]");
  var key = document.querySelector("a[data-key=\"" + e.keyCode + "\"]");
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
}

function transitionRemove(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

var keys = document.querySelectorAll(".button");
keys.forEach(function (key) {
  return key.addEventListener("transitionend", transitionRemove);
});
window.addEventListener("keydown", playSound);