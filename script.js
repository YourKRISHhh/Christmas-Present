// =============================
// Background Music Controller
// =============================

// Load music file
const audio = new Audio("music.mp3");
audio.loop = true;
audio.volume = 0.8;

// Mobile browsers need user interaction first
let unlocked = false;

// Unlock audio on first user tap
document.addEventListener(
  "click",
  () => {
    if (!unlocked) {
      audio
        .play()
        .then(() => {
          audio.pause();
          unlocked = true;
        })
        .catch(() => {});
    }
  },
  { once: true }
);

// Music toggle button
const musicToggle = document.getElementById("music-toggle");

if (musicToggle) {
  musicToggle.addEventListener("click", () => {
    if (!unlocked) return;

    if (audio.paused) {
      audio.play();
      musicToggle.textContent = "Music ON 🔊";
      musicToggle.setAttribute("aria-pressed", "true");
    } else {
      audio.pause();
      musicToggle.textContent = "Music OFF 🔇";
      musicToggle.setAttribute("aria-pressed", "false");
    }
  });
}
