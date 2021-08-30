const inputs = document.querySelectorAll("div.var div.slidecontainer input");

function handleUpdate(inp) {
  const suffix = this.dataset.suffix || "";
  document.documentElement.style.setProperty(
    "--" + this.name,
    this.value + suffix
  );
  console.log("--" + this.name, this.value + suffix);
}

inputs.forEach((input) => input.addEventListener("change", handleUpdate));
inputs.forEach((input) => input.addEventListener("mousemove", handleUpdate));
