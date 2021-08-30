const panels = document.querySelectorAll(".panel");

function toggleOpen(e) {
  //checks to make sure you're not deactivating one, implemented to fix a bug where it would just toggle the flex box twice so nothing would change
  if (!this.classList.contains("open")) {
    //Sets all panels to false
    var i,
      n = panels.length;
    for (i = 0; i < n; ++i) {
      if (panels[i].classList.contains("open")) {
        panels[i].classList.toggle("open");
      }
    }
  }
  //toggles open
  this.classList.toggle("open");
}

// Change made to vid's product: now when you click another flexbox without deactivating the current flexbox it will deactivate all active flexboxes.
//you're welcome.

function toggleActive(e) {
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}

panels.forEach((panel) => panel.addEventListener("click", toggleOpen));
panels.forEach((panel) =>
  panel.addEventListener("transitionend", toggleActive)
);
