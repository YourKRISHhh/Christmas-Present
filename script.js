let audio = new Audio("music.mp3");
audio.loop = true;
audio.volume = 0.8;

function startSite() {
  // remove tap screen
  const tap = document.getElementById("tap-screen");
  if (tap) tap.style.display = "none";

  // start animations
  document.body.classList.remove("locked");
  document.body.classList.add("started");

  // start music
  audio.play().catch(() => {});
}

// music toggle (simple)
window.onload = function () {
  const btn = document.getElementById("music-toggle");
  if (!btn) return;

  btn.onclick = function () {
    if (audio.paused) {
      audio.play();
      btn.textContent = "🔊 Music On";
    } else {
      audio.pause();
      btn.textContent = "🔇 Music Off";
    }
  };
};
