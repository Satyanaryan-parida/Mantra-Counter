const time = document.querySelectorAll(".time");
const chantBtn = document.querySelector(".chantBtn");
const btnMusic = document.querySelector(".btn-music");
const btnreset = document.querySelector(".btn-reset");

let count = 0;

// time update Function
function updateTime() {
  time.forEach((span, index) => {
    const padCount = count.toString().padStart(4, "0");
    span.textContent = padCount[index];
  });
}

const chantAudio = new Audio("./Src/music/RadheRadhe.mp3");
// update time

chantBtn.addEventListener("click", () => {
  count = count > 9999 ? 0 : ++count;
  updateTime();

  chantAudio.currentTime = 0;
  chantAudio.play();
});

// Reset time

btnreset.addEventListener("click", () => {
  count = 0;
  updateTime();
});

// Music

// Chant

const bgMusic = new Audio(
  "./Src/music/backgroundMusic.mp3"
);

// backgroundMusic setup  (play,pause,loop)
let bgMusicPlaying = false;
bgMusic.loop = true;

btnMusic.addEventListener("click", () => {
  if (!bgMusicPlaying) {
    bgMusic.play();
    bgMusicPlaying = true;
  } else {
    bgMusic.pause();
    bgMusicPlaying = false;
  }
});
