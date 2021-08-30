productArray = [];

var canSub = true;
function setCanSub(bol) {
  canSub = bol;
}

function addProduct(prod) {
  if (prod === "" || !canSub) {
    alert("please put in your product name before submitting");
  } else {
    productArray.push(prod);

    document.getElementById("output").innerHTML = "";
    var i = 0;
    productArray.forEach((element) => {
      document.getElementById("output").innerHTML =
        document.getElementById("output").innerHTML +
        "<p id='prodi'>" +
        productArray[i] +
        "</p>";
      i++;
    });
  }
  //  return false;
}

function removeitem() {
  console.log("fds");
  productArray.pop();

  document.getElementById("output").innerHTML = "";
  var i = 0;
  productArray.forEach((element) => {
    document.getElementById("output").innerHTML =
      document.getElementById("output").innerHTML +
      "<p id='prodi'>" +
      productArray[i] +
      "</p>";
    i++;
  });
}
