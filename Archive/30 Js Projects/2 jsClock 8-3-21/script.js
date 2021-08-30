function init() {
  var today = new Date();
  var hour = today.getHours();
  var min = today.getMinutes();
  var sec = today.getSeconds();
  var date =
    today.getMonth() + "." + today.getDate() + "." + today.getFullYear();
  var secD = sec * 6 - 90;
  var minD = min * 6 - 90;
  var hourD = hour * 6 - 90 + 360 / 12;

  document.getElementById("sec").style.transform =
    "rotate(" + secD.toString() + "deg)";
  document.getElementById("min").style.transform =
    "rotate(" + minD.toString() + "deg)";
  document.getElementById("hour").style.transform =
    "rotate(" + hourD.toString() + "deg)";

  document.getElementById("date").innerHTML = date;
}

setInterval(function () {
  init();
}, 10);
