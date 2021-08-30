//Kitty Clicker============

var num = 0;

document.getElementById("score").innerHTML = "Score: " + num;

var container = document.getElementsByClassName("container")[0];
var cat = document.getElementsByClassName("cat")[0];
document.addEventListener("click", function (event) {
  if (container !== event.target && !container.contains(event.target)) {
    //failed
    alert(
      "You have to click the cat.\nIt's literally in the name.\n\nYou idiot."
    );
  }

  if (cat == event.target && container.contains(event.target)) {
    console.log("succesful");
    updateScore();
  }
});

function updateScore() {
  num++;
  document.getElementById("score").innerHTML = "Score: " + num;
}

//BGColor==================

var r = 124;
var g = 153;
var b = 176;

//start
updateValues();

function updateValues() {
  r = document.getElementById("rangeRed").value;
  g = document.getElementById("rangeGreen").value;
  b = document.getElementById("rangeBlue").value;

  document.getElementById("redLog").innerHTML = "red: " + r;
  document.getElementById("greenLog").innerHTML = "green: " + g;
  document.getElementById("blueLog").innerHTML = "blue: " + b;

  document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
}

var party = false;
function disco() {
  party = !party;
  if (party) {
    partyTime();
    document.getElementById("prty").innerHTML = "STOP DISCO";
  } else {
    document.getElementById("prty").innerHTML = "DISCO";
  }
}

var upRed = true;
var upGreen = true;
var upBlue = true;

function partyTime() {
  var count = 0;

  if (party) {
    while (count < 5) {
      //red=======
      if (r == 255) {
        upRed = false;
      } else if (r == 0) {
        upRed = true;
      }

      if (upRed) {
        r++;
      } else {
        r--;
      }

      //green======
      if (g == 255) {
        upGreen = false;
      } else if (g == 0) {
        upGreen = true;
      }

      if (upGreen) {
        g++;
      } else {
        g--;
      }

      //blue=====
      if (b == 255) {
        upBlue = false;
      } else if (b == 0) {
        upBlue = true;
      }

      if (upBlue) {
        b++;
      } else {
        b--;
      }

      document.getElementById("rangeRed").value = r;
      document.getElementById("rangeGreen").value = g;
      document.getElementById("rangeBlue").value = b;

      updateValues();

      if (!party) {
        break;
      }

      count++;
    }

    setTimeout(partyTime, 10);
    //every 1000 is one second
  }
}
