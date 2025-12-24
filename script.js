// -----------------------------
// Background Music Setup
// -----------------------------
const audio = new Audio("music.mp3");
audio.loop = true;
audio.volume = 0.8;

// Mobile browsers require a user interaction first
let audioUnlocked = false;

// Unlock audio on first user interaction
document.addEventListener("click", () => {
  if (!audioUnlocked) {
    audio.play().then(() => {
      audio.pause();
      audioUnlocked = true;
    }).catch(() => {});
  }
}, { once: true });

// Music toggle button
const musicToggle = document.getElementById("music-toggle");

if (musicToggle) {
  musicToggle.addEventListener("click", () => {
    if (!audioUnlocked) return;

    if (audio.paused) {
      audio.play();
      musicToggle.textContent = "🔊 Music On";
    } else {
      audio.pause();
      musicToggle.textContent = "🔇 Music Off";
    }
  });
}

// -----------------------------
// Optional: Smooth fade-in
// -----------------------------
window.addEventListener("load", () => {
  document.body.style.opacity = "1";
}); 
