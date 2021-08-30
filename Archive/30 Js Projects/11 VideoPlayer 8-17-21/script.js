/* Get Our Elements*/
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = document.getElementById("progress");
const vidBox = document.getElementById("vid");

var isDragging = false;

/* Functions */

function playPause() {
  if (video.paused) {
    if (video.ended) {
      setProg(0);
      //restart video if ended
    }
    video.play();
    document.getElementById("p").innerHTML = "■";
  } else {
    video.pause();
    document.getElementById("p").innerHTML = "►";
  }
}

function setVolume(v) {
  video.volume = v / 100;
}

let root = document.documentElement;
var prog = 50;

function updateProg() {
  prog = (video.currentTime / video.duration) * 1000;
  root.style.setProperty("--progress", prog / 10 + "%");
  if (!isDragging) progress.value = prog;
}
function setProg(p) {
  isDragging = false;
  video.currentTime = video.duration * (p / 1000);
}

function drag(p) {
  isDragging = true;
  video.currentTime = video.duration * (p / 1000);
}

function skip(n) {
  video.currentTime = video.currentTime + n;
}

//call updateProg() every .1 seconds
var upPr = setInterval(updateProg, 100);

//checks to see if video is clicked, allowing you to play or pause by selecting the video
vidBox.addEventListener("click", () => {
  playPause();
});

//checks if an arrow is input
document.addEventListener("keydown", logKey);

function logKey(e) {
  console.log(e.keyCode);
  if (e.keyCode === 39) {
    //right arrow
    skip(5);
  }
  if (e.keyCode === 37) {
    //left arrow
    skip(-5);
  }
}
