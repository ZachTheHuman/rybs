function fade() {
  const actives = document.querySelectorAll("#incel");
  for (let i = 0; i < actives.length; i++) {
    //if less than half visible then change class
    const slideInAt =
      window.scrollY + window.innerHeight - actives[i].height / 2;
    const bottom = actives[i].offsetTop + actives[i].height;
    const isHalfShown = slideInAt > actives[i].offsetTop;
    const isNotScrolledPast = window.scrollY < bottom;

    if (isHalfShown && isNotScrolledPast) {
      actives[i].classList.remove("inactive");
      actives[i].classList.add("active");
    } else {
      actives[i].classList.remove("active");
      actives[i].classList.add("inactive");
    }
  }
}
window.addEventListener("scroll", fade);
