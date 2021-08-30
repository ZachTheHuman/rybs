const pressed1 = [];
const pressed2 = [];
const secretCode =
  //"ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba";
  "38384040373937396665";
const godCode = "90656772658289";

window.addEventListener("keyup", (e) => {
  pressed1.push(e.keyCode);
  pressed2.push(e.keyCode);
  pressed1.splice(
    -secretCode.length - 1,
    pressed1.length - secretCode.length / 2
  );
  pressed2.splice(-godCode.length - 1, pressed2.length - godCode.length / 2);

  if (pressed1.join("").includes(secretCode)) {
    alert("Konami's been detected boiiiiiiiiii");
    console.log("+99 lives lesgoooooo!");
  }

  if (pressed2.join("").includes(godCode)) {
    alert("Welcome back God.");
    console.log("All hail Lord Zipparias");
    console.log("\\(T)/");
  }
});
