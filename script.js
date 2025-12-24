const overlay = document.getElementById("start-overlay");

overlay.addEventListener("click", () => {
  overlay.style.display = "none";
  audio.play();
});// =============================
// Simple & Reliable Music Script
// =============================

const audio = new Audio("music.mp3");
audio.loop = true;
audio.volume = 0.8;

const musicToggle = document.getElementById("music-toggle");

if (musicToggle) {
  musicToggle.addEventListener("click", () => {
    if (audio.paused) {
      audio.play()
        .then(() => {
          musicToggle.textContent = "Music ON 🔊";
          musicToggle.setAttribute("aria-pressed", "true");
        })
        .catch((err) => {
          alert("Tap once on the page, then press Music again 🎵");
        });
    } else {
      audio.pause();
      musicToggle.textContent = "Music OFF 🔇";
      musicToggle.setAttribute("aria-pressed", "false");
    }
  });
}
