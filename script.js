// -----------------------------
// Cinematic Start Logic (Mobile-safe)
// -----------------------------

let audio;
let started = false;

window.addEventListener("load", () => {
  audio = new Audio("music.mp3");
  audio.loop = true;
  audio.volume = 0.8;

  const overlay = document.getElementById("start-overlay");

  if (!overlay) return;

  overlay.addEventListener("click", () => {
    if (started) return;
    started = true;

    // Remove overlay
    overlay.style.display = "none";

    // Start animations
    document.body.classList.add("started");

    // Start music (mobile allows after user gesture)
    audio.play().catch(() => {
      // If browser blocks, user can press music button later
    });
  });
});

// -----------------------------
// Music toggle button (optional)
// -----------------------------
window.addEventListener("load", () => {
  const musicToggle = document.getElementById("music-toggle");
  if (!musicToggle) return;

  musicToggle.addEventListener("click", () => {
    if (!audio) return;

    if (audio.paused) {
      audio.play();
      musicToggle.textContent = "🔊 Music On";
    } else {
      audio.pause();
      musicToggle.textContent = "🔇 Music Off";
    }
  });
}); 
