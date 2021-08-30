/* const clap = new Audio(
  "sounds/01%20-%20JavaScript%20Drum%20Kit_sounds_clap.wav"
);

 var hihat = new Audio("audio_file.mp3");
var kick = new Audio("audio_file.mp3");
var openhat = new Audio("audio_file.mp3");
var boom = new Audio("audio_file.mp3");
var ride = new Audio("audio_file.mp3");
var snare = new Audio("audio_file.mp3");
var tom = new Audio("audio_file.mp3");
var tink = new Audio("audio_file.mp3");
*/
document.addEventListener("keyup", function (event) {
  if (event.keyCode == 65) {
    document.getElementById("a").className = "playing";
    playSound("sounds/01%20-%20JavaScript%20Drum%20Kit_sounds_clap.wav", "a");
    setTimeout(function () {
      setToKey("a");
    }, 10);
  }
  if (event.keyCode == 83) {
    document.getElementById("s").className = "playing";
    playSound("sounds/01%20-%20JavaScript%20Drum%20Kit_sounds_hihat.wav", "s");
    setTimeout(function () {
      setToKey("s");
    }, 10);
  }
  if (event.keyCode == 68) {
    document.getElementById("d").className = "playing";
    playSound("sounds/01%20-%20JavaScript%20Drum%20Kit_sounds_kick.wav", "d");
    setTimeout(function () {
      setToKey("d");
    }, 10);
  }
  if (event.keyCode == 70) {
    document.getElementById("f").className = "playing";
    playSound(
      "sounds/01%20-%20JavaScript%20Drum%20Kit_sounds_openhat.wav",
      "f"
    );
    setTimeout(function () {
      setToKey("f");
    }, 10);
  }
  if (event.keyCode == 71) {
    document.getElementById("g").className = "playing";
    playSound("sounds/01%20-%20JavaScript%20Drum%20Kit_sounds_boom.wav", "g");
    setTimeout(function () {
      setToKey("g");
    }, 10);
  }
  if (event.keyCode == 72) {
    document.getElementById("h").className = "playing";
    playSound("sounds/01%20-%20JavaScript%20Drum%20Kit_sounds_ride.wav", "h");
    setTimeout(function () {
      setToKey("h");
    }, 10);
  }
  if (event.keyCode == 74) {
    document.getElementById("j").className = "playing";
    playSound("sounds/01%20-%20JavaScript%20Drum%20Kit_sounds_snare.wav", "j");
    setTimeout(function () {
      setToKey("j");
    }, 10);
  }
  if (event.keyCode == 75) {
    document.getElementById("k").className = "playing";
    playSound("sounds/01%20-%20JavaScript%20Drum%20Kit_sounds_tom.wav", "k");
    setTimeout(function () {
      setToKey("k");
    }, 10);
  }
  if (event.keyCode == 76) {
    document.getElementById("l").className = "playing";
    playSound("sounds/01%20-%20JavaScript%20Drum%20Kit_sounds_tink.wav", "l");
    setTimeout(function () {
      setToKey("l");
    }, 10);
  }
});

function setToKey(norm) {
  document.getElementById(norm).className = "key";
}

function playSound(clip, _key) {
  document.getElementById(_key + "_player").innerHTML =
    '<audio src = "' + clip + '" autoplay><audio>';
}
