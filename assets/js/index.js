  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`a[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
  }

  function transitionRemove(e) {
    if (e.propertyName !== "transform") return;
    this.classList.remove("playing");
  }

  const keys = document.querySelectorAll(".button");
  keys.forEach(key => key.addEventListener("transitionend", transitionRemove));
  window.addEventListener("keydown", playSound);
